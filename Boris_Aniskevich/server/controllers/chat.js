const Chat = require('../models/chat')
const utils = require('../utils')

getChats = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    const responce = await utils.verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        const chats = await utils.generateChatsNames(responce.user.id)
        return res.status(200).json({
                resultCode: responce.resultCode,
                chats,
            })
    }
}

createChat = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    const responce = await utils.verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        let chat
        chat = await Chat.findOne({members: req.params.id, deletedMembers: responce.user.id})
        if (chat) {
            chat.members.push(chat.deletedMembers[0])
            chat.deletedMembers.pop()
        } else {
            chat = new Chat({members: [responce.user.id, req.params.id], deletedMembers: []})
        }
        chat.save()
            .then(async chat => {
                const chats = await utils.generateChatsNames(responce.user.id)
                return res.status(200).json({
                    resultCode: responce.resultCode,
                    chats,
                    redirectChatId: chat._id,
                })
            })
            .catch(err => {
                res.status(400).send('Error')
            })
    }
}

deleteChat = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(401).json({
            resultCode: 1,
            message: 'Unauthorized',
        })
    }
    const responce = await utils.verifyToken(token)
    if (responce.resultCode !== 0) {
        return res.status(401).json(responce)
    } else {
        const chat = await Chat.findById(req.params.id)
        const members = chat.members.filter(member => member != responce.user.id)
        chat.members = members
        chat.deletedMembers.push(responce.user.id)
        if (chat.deletedMembers.length > 1) {
            Chat.findByIdAndDelete(req.params.id)
            .then(async chat => {
                const chats = await utils.generateChatsNames(responce.user.id)
                return res.status(200).json({
                    resultCode: responce.resultCode,
                    chats,
                    redirectChatId: chat._id,
                })
            })
            .catch(err => {
                res.status(400).send('Error')
            })
        } else {
            chat.save()
            .then(async chat => {
                const chats = await utils.generateChatsNames(responce.user.id)
                return res.status(200).json({
                    resultCode: responce.resultCode,
                    chats,
                    redirectChatId: chat._id,
                })
            })
            .catch(err => {
                res.status(400).send('Error')
            })
        }
        
    }
}

module.exports = {
    getChats,
    createChat,
    deleteChat,
}