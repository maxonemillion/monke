const { Saved } = require("../models")
const router = require("express").Router();

router
  .route('/')
  .get((req, res) => {
    Saved
      .find({})
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  })
  .post((req, res) => {
    console.log({ ...req.body });
    Saved
      .create({
        ...req.body
      })
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });

router
  .route('/:id')
  .delete((req, res) => {
    console.log(req.params);
    Saved
      .findByIdAndDelete(req.params.id)
      .then(data => {
        res.json({ success: true });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });

module.exports = router;
