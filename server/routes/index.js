const router = require('express').Router();
const users = require('./auth-routes');
const JST = require("jsonwebtoken");
const db = require("../models")

router.use("/api/users", users);
// router.use("/api/listings", listings);
router.get("/test", (req, res) => {
    try{
        console.log("hello", req.query)
    let verified = JST.verify(req.query.token, process.env.JWTSCRT);
    console.log(verified);
    res.end();
    } catch(err) {
        console.error(err);
        res.send("You're not authorized");
    }
}) 
router.post("/api/listings",(req,res) => {
db.Listing.create(req.body).then(results => res.json(results))
})
router.get("/api/listings",(req,res) => {
db.Listing.find({}).then(results => res.json(results))
})

module.exports = router;