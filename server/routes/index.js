const router = require('express').Router();
const auth = require('./auth-routes.js');

// /api/todo
router.use('/api/auth', auth);

module.exports = router;