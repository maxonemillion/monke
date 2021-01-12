const router = require('express').Router();

const db = require("../models")

router.get("/", (req, res) => {
  db.Listing.find({}).then(results => res.json(results))
})

router
  .post("/", (req, res) => {
    console.log("TEST", req.body);
    db.Listing
      .create({
        ...req.body
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
  });

module.exports = router;