const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/messenger', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongodb connected"))
    .catch(err => {
        console.error('Connection error', err.message)
    })

const db = mongoose.connection

module.exports = db