const express = require('express')

const UserController = require('../controllers/user')

const router = express.Router()

router.get('/contacts', UserController.getContacts)

module.exports = router