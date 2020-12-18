const db = require("../models");
const router = require("express").Router();
const passport = require("../config/passport");

router.post("/SignupPage", (req, res) => {
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(() => {
    res.redirect(307, "/auth/LoginPage");
  });
});
  
router.post("/LoginPage", passport.authenticate("local"), (req, res) => {
  console.log("hey");
  console.log(req.user);
  res.send("ok");
});

module.exports = router;