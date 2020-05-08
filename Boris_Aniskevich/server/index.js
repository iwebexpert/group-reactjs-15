const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const WebSocket = require('ws')

const app = express().use(cors())
const port = process.env.PORT || 3000
const SECRET = 'SECRET'

app.use(bodyParser.json())
app.use(express.static('dist'))

const webSocketServer = new WebSocket.Server({port: 4000})

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

function verifyToken(token) {
    return jwt.verify(token, SECRET, (err, user) => {
        if (err) throw err
        users.find(u => u.id === user.id)
        if (!user) {
            return {
                resultCode: 1,
                message: 'Unauthorized',
            }
        } else {
            return {
                resultCode: 0,
                user: {
                    id: user.id,
                    username: user.username,
                }
            }
        }
    })
}

//utils

function generateContacts(userId) {
    const contacts = users.filter(user => user.id !== userId)
    const userChats = chats.filter(chat => chat.members.includes(userId))
    for (const index in userChats) {    
        for (const idx in contacts) {
            if (userChats[index].members.includes(contacts[idx].id)) {
                contacts.splice(idx, 1)
            }
        }
    }
    //contacts.map(contact => delete contact['password'])
    return contacts
}

function generateChatsNames(userId) {
    const updatedChats = chats.filter(chat => chat.members.includes(userId))
    updatedChats.map(chat => {
        chat.name = extractChatName(chat.members, userId)
        return chat
    })
    return updatedChats
}

function extractChatName(members, userId) {
    for (const idx in users) {
        if (members.includes(users[idx].id) && users[idx].id !== userId) return users[idx].username
    }
}
//webSocketServer

webSocketServer.on('connection', (ws) => {
    console.log('new connection')
    ws.on('message', message => {
        const data = JSON.parse(message)
        const { chatId, authorId } = data
        if (chatId in messages) {
            messages[chatId].push({id: messages[chatId].length, message: data.message, authorId })
        } else {
            messages[chatId] = [{id: 0, message: data.message, authorId}]
        }
        webSocketServer.clients.forEach(function each(client) {
            client.send(JSON.stringify(messages))
        })
    })
    ws.on('close', () => {
        console.log('connection closed')
    })
})

//routes

app.get('/api/auth', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    const responce = verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        return res.status(200).json(responce)
    }
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
    const responce = verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        const chats = generateChatsNames(+responce.user.id)
        return res.status(200).json({
                resultCode: responce.resultCode,
                chats,
            })
    }
})

app.post('/api/chats/:id', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    const responce = verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        chats.push({id: chats.length, members: [+responce.user.id, +req.params.id]})
        const updatedChats = generateChatsNames(+responce.user.id)
        return res.status(200).json({
                resultCode: responce.resultCode,
                chats: updatedChats,
            })
    }
})

app.get('/api/contacts', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    const responce = verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        const contacts = generateContacts(+responce.user.id)
        return res.status(200).json({
            resultCode: responce.resultCode,
            contacts,
        })
    }
})

app.get('/api/messages', (req, res) => {
    res.send(messages)
})

// app.post('/api/messages/:id', (req, res) => {
//     const token = req.headers['authorization'].split(' ')[1]
//     if (!token) {
//         return res.status(401).json({
//             resultCode: 1,
//             message: 'Unauthorized',
//         })
//     }
//     const responce = verifyToken(token)
//     if (responce.resultCode !== 0) {
//         return res.status(401).json(responce)
//     } else {
//         const chatId = req.params.id
//         const authorId = +responce.user.id
//         if (chatId in messages) {
//             messages[chatId].push({id: messages[chatId].length, message: req.body.message, authorId })
//         } else {
//             messages[chatId] = [{id: 0, message: req.body.message, authorId}]
//             }
//         return res.status(200).json({
//             resultCode: responce.resultCode,
//             messages,
//         })
//     }
// })

app.get('/api', (req, res) => {
    res.send({'message': 'mock page'})
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})