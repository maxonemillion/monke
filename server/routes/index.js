const router = require('express').Router();
const users = require('./auth-routes');

// /api/todo
router.use('/api/users', users);

module.exports = router;