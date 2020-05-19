const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    message: { type: String, required: true },
    authorId: { type: String, required: true },
    chatId: { type: String, required: true },
},
    { timestamps: true },
)

module.exports = mongoose.model('message', messageSchema)