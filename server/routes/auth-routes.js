const router = require('express').Router();
const {
  Users
} = require('../models');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken")

// /api/users/
router
  .route("/signup")
  .post((req, res) => {
    console.log("TEST", req.body);
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

router
  .route("/login")
  .post((req, res) => {
    Users
      .findOne({
        email: req.body.email,
      }).then(data => {
        if (data) {
          bcrypt.compare(req.body.password, data.password, function (err, passwordsMatch) {
            if (passwordsMatch) {

              let token = jwt.sign(data.email, process.env.JWTSCRT)

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