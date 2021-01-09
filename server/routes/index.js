const router = require('express').Router();
const users = require('./auth-routes');
const JST = require("jsonwebtoken");
const db = require("../models")
const authMiddle = (req, res, next) => {
    try {
        console.log("hello", req.query)
        let verified = JST.verify(req.query.token, process.env.JWTSCRT);
        console.log(verified);
        req.user = verified;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).send("You're not authorized");
    }
}
router.get("/verified", authMiddle, (req, res) => {
    res.json(req.user);
})
router.use("/api/users", users);
router.get("/test", authMiddle, (req, res) => {
    res.send("working")
})
router.post("/api/job", authMiddle, (req, res) => {
    db.Job.create(req.body).then(results => res.json(results))
})

module.exports = router;