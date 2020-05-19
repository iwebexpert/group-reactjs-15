const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    members: { type: Array, required: true },
    deletedMembers: { type: Array, required: true },
    name: { type: String }
},
    { timestamps: true },
)

module.exports = mongoose.model('chat', chatSchema)