const router = require('express').Router();
const { Listing } = require("../models")


router
  .get("/", (req, res) => {
    Listing
      .find({})
      .then(results => res.json(results))
  })
  .post("/", (req, res) => {
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
  })
  .post("/:id", (req, res) => {
    console.log("TEST", req.body);
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
        console.log("TEST2", data);
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
    console.log('=========================')
    console.log(req.params);
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