const router = require('express').Router();
const users = require('./auth-routes');

router.use("/api/users", users);

module.exports = router;