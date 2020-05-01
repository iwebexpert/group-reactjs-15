const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const app = express().use(cors())
const port = process.env.PORT || 3000
const SECRET = 'SECRET'

app.use(bodyParser.json())
app.use(express.static('dist'))

// mock files

const chats = []

const messages = {}

const users = [
    {id: 0, username: 'test', password: '$2b$10$UBrb7CWpvlif7QHuwWuiBOV0KxBoiPrGK97QTC4hTUfx/GhxDq6FC', },
    {id: 1, username: 'user', password: '$2b$10$Edxx6eu5wkouqpW7lbLa6uMNvxPb31zAwXwOvc8QGhvGB3vVs/EGy', },
]

//auth

const jwt = require('jsonwebtoken')

function generateToken(user) {
    const u = {
        username: user.username,
        id: user.id.toString(),
    }
    return jwt.sign(u, SECRET, {
        expiresIn: 60 * 60 * 24,
    })
}

//routes

app.get('/api/auth', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    jwt.verify(token, SECRET, (err, user) => {
        if (err) throw err
        users.find(u => u.id === user.id)
        if (!user) {
            return res.status(401).json({
                resultCode: 1,
                message: 'Unauthorized',
            })
        } else {
            return res.status(200).json({
                resultCode: 0,
                user: {
                    id: user.id,
                    username: user.username,
                }
            })
        }
    })
})

app.post('/api/auth', (req, res) => {
    const user = users.find(user => user.username === req.body.username)
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
            const token = generateToken(user)
            return res.status(200).json({
                resultCode: 0,
                token,
            })
        }
    })
})

app.post('/api/auth/signup', (req, res) => {
    let user = users.find(user => user.username === req.body.username)
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
    user = {id: users.length, username: body.username, password: hash,}
    users.push(user)
    const token = generateToken(user)
    return res.status(200).json({
        resultCode: 0,
        token,
    })
})

app.get('/api/chats', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    jwt.verify(token, SECRET, (err, user) => {
        if (err) throw err
        users.find(u => u.id === user.id)
        if (!user) {
            return res.status(401).json({
                resultCode: 1,
                message: 'Unauthorized',
            })
        } else {
            return res.status(200).json({
                resultCode: 0,
                chats: chats.filter(chat => chat.userId === +user.id)
            })
        }
    })
})

app.post('/api/chats/:id', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    jwt.verify(token, SECRET, (err, user) => {
        if (err) throw err
        users.find(u => u.id === user.id)
        if (!user) {
            return res.status(401).json({
                resultCode: 1,
                message: 'Unauthorized',
            })
        } else {
            const name = users.filter(u => u.id === +req.params.id)[0].username
            chats.push({id: chats.length, name: name, userId: +user.id, memberId: +req.params.id})
            return res.status(200).json({
                resultCode: 0,
                chats: chats.filter(chat => chat.userId === +user.id)
            })
        }
    })
})

app.get('/api/contacts', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    jwt.verify(token, SECRET, (err, user) => {
        if (err) throw err
        users.find(u => u.id === user.id)
        if (!user) {
            return res.status(401).json({
                resultCode: 1,
                message: 'Unauthorized',
            })
        } else {
            const contacts = users.filter(u => u.id !== +user.id)
            //contacts.map(contact => delete contact['password'])
            for (idx in contacts) {
                for (index in chats) {
                    if (contacts[idx].id === chats[index].memberId && chats[index].userId === +user.id) {
                        contacts.splice(idx, 1)
                    }
                }
            }
            return res.status(200).json({
                resultCode: 0,
                contacts,
            })
        }
    })
})

app.get('/api/messages', (req, res) => {
    res.send(messages)
})

app.post('/api/messages/:id', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    jwt.verify(token, SECRET, (err, user) => {
        if (err) throw err
        users.find(u => u.id === user.id)
        if (!user) {
            return res.status(401).json({
                resultCode: 1,
                message: 'Unauthorized',
            })
        } else {
            const chatId = req.params.id
            const authorId = +user.id
            if (chatId in messages) {
                messages[chatId].push({id: messages[chatId].length, message: req.body.message, authorId })
            } else {
                messages[chatId] = [{id: 0, message: req.body.message, authorId}]
            }
            return res.status(200).json({
                resultCode: 0,
                messages
            })
        }
    })
})

app.get('/api', (req, res) => {
    res.send({'message': 'mock page'})
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})