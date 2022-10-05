const express = require('express');
const router = express.Router();
const indexController = require('../controller/index_controller');

//route for new meeting --> creates a new room
router.get('/', indexController.createNewRoom);

//route for opening a specific room
router.get('/:room', indexController.joinRoom);

router.get('/end/:room', indexController.leaveRoom);

module.exports = router;