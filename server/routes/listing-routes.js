const router = require('express').Router();
const { Listing } = require("../models")


router
  .get("/", (req, res) => {
    Listing
      .find({})
      .then(results => res.json(results))
  })
  .post("/", (req, res) => {

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
  })
  .post("/:id", (req, res) => {

    Listing
      .findByIdAndUpdate(req.params.id, {
        $set: {
          title: req.body.title,
          company: req.body.company,
          description: req.body.description,
          language: req.body.language,
          contact: req.body.contact,
          pay: req.body.pay,
      }
      }
      )
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


router
  .delete("/:id", (req, res) => {


    Listing
      .findByIdAndDelete(req.params.id)
      .then(data => {
        res.json({ success: true });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });


module.exports = router;