const express = require('express');
const testController = require('../controllers/test.controller');
const router = express.Router();

router.post('/', testController.test);

module.exports = router;