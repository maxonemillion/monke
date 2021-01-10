const router = require('express').Router();

const db = require("../models")

router.post("/api/listings",(req,res) => {
    db.Listing.create(req.body).then(results => res.json(results))
    })
    router.get("/api/listings",(req,res) => {
    db.Listing.find({}).then(results => res.json(results))
    })

    router
  .route("/listings")
  .post((req, res) => {
    console.log("TEST", req.body);
      Listing
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