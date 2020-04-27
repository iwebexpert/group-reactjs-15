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

const chats = [
    {id: 1, name: 'first', userId: 2,},
    {id: 2, name: 'second', userId: 1,},
    {id: 3, name: 'third', userId: 1,},
]

const messages = {
    1: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', authorId: 2,},
        {id: 2, message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo', authorId: 1,},
    ],
    2: [
        {id: 5, message: 'first', authorId: 2,},
        {id: 6, message: 'second', authorId: 1,},
        {id: 7, message: 'third', authorId: 2,},
    ],
}

const users = [
    {id: 1, username: 'test', password: '$2b$10$UBrb7CWpvlif7QHuwWuiBOV0KxBoiPrGK97QTC4hTUfx/GhxDq6FC', },
    {id: 2, username: 'user', password: '$2b$10$Edxx6eu5wkouqpW7lbLa6uMNvxPb31zAwXwOvc8QGhvGB3vVs/EGy', },
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

app.get('/api/messages', (req, res) => {
    res.send(messages)
})

app.post('/api/messages/:id', (req, res) => {
    const id = Math.random()
    const chatId = req.params.id
    const authorId = req.body.authorId
    if (chatId in messages) {
        messages[chatId].push({id: id, message: req.body.message, authorId })
        if (authorId !== chatId) messages[chatId].push({id: id+1, message: `I'm bot from chat ${chatId}`, authorId: chatId})
    } else {
        messages[chatId] = [{id: id, message: req.body.message, authorId}]
        if (authorId !== chatId) messages[chatId].push({id: id+1, message: `I'm bot from chat ${chatId}`, authorId: chatId})
    }
    res.send(messages)
})

app.get('/api', (req, res) => {
    res.send({'message': 'mock page'})
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})