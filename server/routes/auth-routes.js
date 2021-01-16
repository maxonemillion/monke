const router = require('express').Router();
const {
  Users
} = require('../models');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken")
const JST = require("jsonwebtoken");

const authMiddle = (req, res, next) => {
  try {
    if (req.query.token !== "null") {


      let verified = JST.verify(req.query.token, process.env.JWTSCRT);

      req.user = verified;
      next();
    } else {
      throw "JWT not found"
    }
  } catch (err) {
      console.error(err);
      res.status(401).send("You're not authorized");
  }
}
router.get("/verified", authMiddle, (req, res) => {

  res.json(req.user);
})
router.get("/test", authMiddle, (req, res) => {
  res.send("working")
})
// router.post("/api/job", authMiddle, (req, res) => {
//   db.Job.create(req.body).then(results => res.json(results))
// }) 

router.post("/signup", (req, res) => {

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      Users
        .create({
          ...req.body,
          password: hash
        })
        .then(data => {
          res.json({
            success: true,
            data
          });
        })
        .catch(err => {
          console.log(err);
          res.json({
            success: false
          });
        });
    })
  });

router.post("/login", (req, res) => {
    Users
      .findOne({
        email: req.body.email,
      }).then(data => {
        if (data) {
          bcrypt.compare(req.body.password, data.password, function (err, passwordsMatch) {

            if (passwordsMatch) {
              const { role, _id, email } = data 

              let token = jwt.sign({ role, _id, email }, process.env.JWTSCRT)

              res.json({
                auth: true,
                role: data.role,
                token
              })
            } else {
              res.json({
                auth: false,
                message: "Invalid password"
              });
            }
          })
        } else {
          res.json({
            auth: false,
            message: "User not found"
          });
        }
      })
  })

module.exports = router;