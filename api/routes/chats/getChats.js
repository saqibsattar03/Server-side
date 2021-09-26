const { router } = require('../../../config/expressconfig')
const ChatMessage = require('../../models/chatMessage')

let getAllChats = router.get('/get-chats',async (req,res)=>{
    const { senderEmail, receiverEmail } = req.body
     const result = await ChatMessage.find({senderEmail,receiverEmail})
    if (result && result.length != 0) {
        return res.json({
            message: 'CHATS SUCCESSFULLY FETCH',
            responseCode: 200,
            chats: result,
        })
    } else {
        return res.json({
            message: 'CHATS NOT AVAILABLE',
            responseCode: 400,
            chats: result,
        })
    }
    console.log(data)
})

module.exports = {getAllChats}