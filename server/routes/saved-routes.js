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
    console.log("ID", req.params)
    const userSaved = await Users.findById(req.params.id).populate("jobs")
    console.log("userSaved", userSaved);  
    res.json({ success: false, data: userSaved.jobs });
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
        res.json({ success: false, err });
      });
  });

router
  .delete('/:id', (req, res) => {
    console.log("DELETE", req.params);
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
