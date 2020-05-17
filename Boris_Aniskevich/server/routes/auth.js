const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()

router.get('/', userController.checkAuth)
router.post('/', userController.signin)
router.post('/signup', userController.createUser)

module.exports = router