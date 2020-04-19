const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/api', (req, res) => {
    res.send({'message': 'mock page'})
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})