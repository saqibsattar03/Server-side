const {router} = require('../../config/expressconfig')
const {sql} = require('../../config/dbConfig')
const checkAuth = require('../auth/middleware/checkAuth')
let getchats = router.get(
    '/get-chats',
    checkAuth, (req, res) => {
        let {senderEmail, reciverEmail} = req.query

        sql.selectChats(reciverEmail, senderEmail, result => {
            if (result && result.length != 0) {
                return res.json({
                    message: 'CHATS SUCCESSFULLY FETCH',
                    responseCode: 200,
                    chats: result,
                    unSeenRecievedMessageCount: result.length
                })
            } else {
                return res.json({
                    message: 'CHATS NOT AVAILABLE',
                    responseCode: 400,
                    chats: result,
                    unSeenRecievedMessageCount: 0
                })
            }
        })
    }
)

let getUnreadMessagesCount = router.get(
    '/unread-messages/count/:email',
    (req, res) => {
        // console.log('HIT')
        const {email} = req.params
        sql.customQuery(
            `SELECT * FROM chats WHERE chats.reciverEmail = '${email}' AND isSeen = 'FALSE'`,
            (result, isError) => {
                if (isError === false && result.length > 0) {
                    res.status(200).json({
                        message: 'CHATS SUCCESSFULLY FETCH',
                        unreadMessagesCount: result.length
                    })
                } else if (isError === false && result.length === 0) {
                    res.status(200).json({
                        message: 'CHATS SUCCESSFULLY FETCH',
                        unreadMessagesCount: 0
                    })
                } else {
                    res.status(404).json({
                        message: 'ERROR',
                        responseCode: 400,
                        chats: result
                    })
                }
            }
        )
    }
)

let getEachUnreadMessageCount = router.get(
    '/all-userSelection/unread-messages',
    checkAuth, (req, res) => {
        const {email} = req.query
        sql.customQuery(
            `SELECT *  
       FROM  
       (SELECT  * , SUM(CASE WHEN reciverEmail = '${email}' 
       AND 
       isSeen = 'FALSE' THEN 1 ELSE 0 END) 
       AS unreadMessagesCount  
       FROM 
       (SELECT *
       FROM
       chats
       WHERE chats.senderEmail = '${email}' OR chats.reciverEmail = '${email}' 
       ) 
       AS 
       conversations 
       WHERE conversations.senderEmail != '${email}'
       GROUP BY senderEmail )
       AS chat 
       JOIN tradingseek.user 
       ON 
       user.email = chat.senderEmail`,
            async (conversations, isError) => {
                if (isError === false && conversations.length > 0) {
                    res.status(200).json({
                        message: 'CHATS SUCCESSFULLY FETCH',
                        conversations
                    })
                } else if (isError === false && conversations.length === 0) {
                    res.status(200).json({
                        message: 'NO CONVERSATIONS EXISITS',
                        conversations
                    })
                } else {
                    res.status(404).json({
                        message: 'ERROR',
                        responseCode: 400,
                        conversations
                    })
                }
            }
        )
    }
)

let postSeenMessage = router.post(
    '/set-unread-messages-to-read',
    checkAuth, (req, res) => {
        let {senderEmail} = req.body
        sql.customQuery(
            `
      UPDATE chats
      SET isSeen = 'TRUE'
      WHERE chats.senderEmail = '${senderEmail}';
    `,
            (result, isError) =>
                isError === false &&
                res
                    .status(200)
                    .json({message: 'unread-message-set-to-read'})
                    .end()
        )
        return res
    }
)

module.exports = {
    getchats,
    getUnreadMessagesCount,
    getEachUnreadMessageCount,
    postSeenMessage
}
