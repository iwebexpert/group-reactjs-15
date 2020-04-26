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
    {id: 1, name: 'first',},
    {id: 2, name: 'second',},
    {id: 3, name: 'third',},
]

const messages = {
    1: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',},
        {id: 2, message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',},
    ],
    2: [
        {id: 5, message: 'first',},
        {id: 6, message: 'second',},
        {id: 7, message: 'third',},
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
        if (err) throw err;
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

app.get('/api/chats', (req, res) => {
    res.json(chats)
})

app.get('/api/messages', (req, res) => {
    res.send(messages)
})

app.post('/api/messages/:id', (req, res) => {
    const id = Math.random()
    if (req.params.id in messages) {
        messages[req.params.id].push({id: id, message: req.body.message})
    } else {
        messages[req.params.id] = [{id: id, message: req.body.message}]
    }
    res.send(messages)
})

app.get('/api', (req, res) => {
    res.send({'message': 'mock page'})
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})