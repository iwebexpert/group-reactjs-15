const express = require('express')

const chatController = require('../controllers/chat')

const router = express.Router()

router.get('/', chatController.getChats)
router.post('/:id', chatController.createChat)
router.delete('/:id', chatController.deleteChat)

module.exports = router