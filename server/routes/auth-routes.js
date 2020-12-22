const router = require('express').Router();
const { Users } = require('../models');

// restful api
// /api/users/
router
  .post("/api/users", (req, res) => {
    console.log({ reqBody: req.body });

    Users
      .create({
        email: req.body.email,
        password: req.body.password
      })
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });

module.exports = router;