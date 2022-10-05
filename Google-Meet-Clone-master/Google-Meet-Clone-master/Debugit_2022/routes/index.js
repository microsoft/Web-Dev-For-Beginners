const express = require('express');
const router = express.Router();
const indexController = require('../controller/index_controller');


router.get('/', indexController.renderHome);
router.use('/room', require('./room.js'));

module.exports = router;