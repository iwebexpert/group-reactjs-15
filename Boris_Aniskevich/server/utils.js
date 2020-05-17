const jwt = require('jsonwebtoken')

const User = require('./models/user')
const Chat = require('./models/chat')

const SECRET = 'SECRET'

generateToken = user => {
    const u = {
        username: user.username,
        _id: user._id.toString(),
    }
    return jwt.sign(u, SECRET, {
        expiresIn: 60 * 60 * 24,
    })
}

verifyToken = token => {
    return jwt.verify(token, SECRET, async (err, token) => {
        if (err) throw err
        const user = await User.findById(token._id)
        if (!user) {
            return {
                resultCode: 1,
                message: 'Unauthorized',
            } 
        } else {
            return {
                resultCode: 0,
                user: {
                    id: user._id.toString(),
                    username: user.username,
                }
            }
        }
    })
}

generateContacts = async userId => {
    let contacts = await User.find({_id: {$ne: userId}}, '_id username')
    const chats = await Chat.find({members: userId}, '_id members deletedMembers')
    let temp
    for (idx in chats) {
        if (chats[idx].members.length > 1) {
            temp = chats[idx].members.filter(member => member != userId )
            contacts = contacts.filter(user => user._id != temp[0])
        } else if (chats[idx].members.length === 1) {
            temp = chats[idx].deletedMembers
            contacts = contacts.filter(user => user._id != temp[0])
        }
    }
    return contacts
}

generateChatsNames = async userId => {
    const chats = await Chat.find({members: userId}, '_id members deletedMembers')
    let id
    await Promise.all(chats.map(async chat => {
        if (chat.members.length === 1) {
            id = chat.deletedMembers[0]
        } else {
            id = chat.members[0] === userId ? chat.members[1] : chat.members[0]
        }
        const user = await User.findById(id, 'username')
        chat.name = user.username
    }))
    return chats
}

module.exports = {
    generateContacts,
    generateChatsNames,
    generateToken,
    verifyToken,
}