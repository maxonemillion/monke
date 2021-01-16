const { Saved, Users } = require("../models")
const router = require("express").Router();

router
  .get("/", (req, res) => {
    Saved
      .find({})
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  })
  .get("/:id", async (req, res) => {

    const userSaved = await Users.findById(req.params.id).populate("jobs")

    res.json({ success: false, data: userSaved.jobs });
  })
  .post("/", (req, res) => {

    Saved
      .create({
        ...req.body
      })
      .then(async data => {


        const users = await Users.findByIdAndUpdate(req.body.userID, {
          $push: {jobs: data._id}
        })

        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false, err });
      });
  });

router
  .delete('/:id', (req, res) => {

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
