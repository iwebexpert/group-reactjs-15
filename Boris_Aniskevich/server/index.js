const express = require('express')
const cors = require('cors')

const app = express().use(cors())
const port = process.env.PORT || 3000

const chats = [
    {id: 1, name: 'first',},
    {id: 2, name: 'second',},
    {id: 3, name: 'third',},
]

const messages = {
    1: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',},
        {id: 2, message: 'test 2',},
    ],
    2: [
        {id: 5, message: 'first',},
        {id: 6, message: 'second',},
        {id: 7, message: 'third',},
    ],
}

app.use(express.static('dist'))

app.get('/api/chats', (req, res) => {
    res.json(chats)
})

app.get('/api/messages', (req, res) => {
    res.send(messages)
})

app.get('/api', (req, res) => {
    res.send({'message': 'mock page'})
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})