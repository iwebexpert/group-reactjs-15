const Message = require('../models/message')
const utils = require('../utils')

getMessages = async (req, res) => {
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
        const messages = await Message.find()
        return res.status(200).json({
                resultCode: responce.resultCode,
                messages,
            })
    }
}

createMessage = async data => {
    const message = new Message(data)
    return message.save()
            .then(async () => {
                const messages = await Message.find()
                return messages
            })
            .catch(err => {
                return err
            })
}

module.exports = {
    getMessages,
    createMessage,
}