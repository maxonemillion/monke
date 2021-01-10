const router = require('express').Router();
const users = require('./auth-routes');
const listings = require('./listing-routes')

router.use("/api/users", users);
router.use("/api/listings", listings);

module.exports = router;