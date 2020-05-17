const bcrypt = require('bcrypt')

const User = require('../models/user')
const utils = require('../utils')

createUser = (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        const body = req.body
        if (user) {
            return res.status(403).json({
                resultCode: 1,
                message: 'User already exists',
            })
        } 
        if (body.password !== body.repeatPassword) {
            return res.status(403).json({
                resultCode: 1,
                message: 'Passwords doesn\'t match',
            })
        }    
        const hash = bcrypt.hashSync(body.password.trim(), 10)
        const newUser = new User({username: body.username, password: hash})
        newUser.save()
            .then(newUser => {
                const token = utils.generateToken(newUser)
                res.status(200).json({
                    resultCode: 0,
                    token,
                })
            })
            .catch(err => {
                res.status(400).send('Error')
            })
    })
}

checkAuth = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    const responce = await utils.verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        return res.status(200).json(responce)
    }
}

signin = (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (!user) {
            return res.status(404).json({
                resultCode: 1,
                message: 'Username or Password is Wrong',
            })
        }      
        bcrypt.compare(req.body.password, user.password, (err, valid) => {
            if (!valid) {    
                return res.status(404).json({
                    resultCode: 1,
                    message: 'Username or Password is Wrong',
                })
            } else {
                const token = utils.generateToken(user)
                return res.status(200).json({
                    resultCode: 0,
                    token,
                })
            }
        })
    })
}

getContacts = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    const responce = await utils.verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        const contacts = await utils.generateContacts(responce.user.id)
        return res.status(200).json({
            resultCode: responce.resultCode,
            contacts,
        })
    }
}

module.exports = {
    createUser,
    signin,
    checkAuth,
    getContacts,
}