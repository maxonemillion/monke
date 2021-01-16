const router = require('express').Router();
const users = require('./auth-routes');
const listings = require('./listing-routes')
const saved = require("./saved-routes")

router.use("/api/users", users);
router.use("/api/listings", listings);
router.use("/api/saved", saved);

router.delete('/api/test', (req, res) => {

    res.sendStatus(200);
});

const db = require("../models")
router.get("/test", async (req, res) => {
    let stuff = await db.Users.findById("5ffd3b542c6ff7ab5e118dea").populate("jobs")

    res.send("ok")
})

module.exports = router;