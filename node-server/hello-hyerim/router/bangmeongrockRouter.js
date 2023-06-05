const { findAll, create } = require('../controller/bangmeongrockController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.post('/', create);

module.exports = router;