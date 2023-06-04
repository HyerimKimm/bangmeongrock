const { findAll, create } = require('../controller/bangmeongrockController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

module.exports = router;