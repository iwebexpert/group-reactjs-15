const express = require('express')
const cors = require('cors')

const app = express().use(cors())
const port = process.env.PORT || 3000

const chats = [
    {id: 1, name: 'first',},
    {id: 2, name: 'second',},
    {id: 3, name: 'third',},
]

app.use(express.static('dist'))

app.get('/api/chats', (req, res) => {
    res.json(chats)
})

app.get('/api', (req, res) => {
    res.send({'message': 'mock page'})
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})