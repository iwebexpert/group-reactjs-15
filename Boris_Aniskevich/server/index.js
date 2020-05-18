const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const WebSocket = require('ws')

const app = express().use(cors())
const port = process.env.PORT || 3000

const db = require('./db')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const chatRouter = require('./routes/chat')
const messageRouter = require('./routes/message')
const messageController = require('./controllers/message')

app.use(bodyParser.json())
app.use(express.static('dist'))

const webSocketServer = new WebSocket.Server({port: 4000})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

webSocketServer.on('connection', (ws) => {
    console.log('new connection')
    ws.on('message', async message => {
        const data = JSON.parse(message)
        const messages = await messageController.createMessage(data)
        webSocketServer.clients.forEach(function each(client) {
            client.send(JSON.stringify(messages))
        })
    })
    ws.on('close', () => {
        console.log('connection closed')
    })
})

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/chats', chatRouter)
app.use('/api/messages', messageRouter)

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})