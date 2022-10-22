const express = require('express');
const router = express.Router();
const { signupController } = require('../controller/auth');

router.post('/signup', signupController);

module.exports = router;