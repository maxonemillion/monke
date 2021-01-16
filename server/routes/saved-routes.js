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
  .post("/", (req, res) => {
    console.log({ ...req.body });
    Saved
      .create({
        ...req.body
      })
      .then(async data => {
        console.log("USERID", req.body.userID, data)

        const users = await Users.findByIdAndUpdate(req.body.userID, {
          $push: {jobs: data._id}
        })
        console.log("USERS", users)
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });

router
  .delete('/:id', (req, res) => {
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
