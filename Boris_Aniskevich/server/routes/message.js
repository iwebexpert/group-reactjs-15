const express = require('express')

const messageController = require('../controllers/message')

const router = express.Router()

router.get('/', messageController.getMessages)

module.exports = router