const {router} = require('../../../config/expressconfig')
// const Chat = require('../../models/chats')
const ChatMessage = require('../../models/chatMessage')
const checkAuth = require('../auth/middleware/checkAuth')

let postChat = router.post("/post-chat", async (req, res) => {
    console.log(req.body)
    let {message, createdAt = new Date(), seenAt = new Date(), senderEmail,receiverEmail, isFavorite,unSeenReceivedMessageCount} = req.body
    await ChatMessage.create({
        message,
        createdAt,
        seenAt,
        senderEmail,
        receiverEmail,
        isFavorite,
        unSeenReceivedMessageCount
    }).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
    return res.status(200).json({
        msg: "Message sent successfully"
    })
})
module.exports = {postChat}