const { router } = require('../../config/expressconfig')
const { sql } = require('../../config/dbConfig')

let getNormalConversations = router.get(
    '/get-normal-conversations/:customerEmail',
    (req, res) => {
        let { customerEmail } = req.params

        sql.selectNormalConversations(customerEmail, result => {
            if (result && result.length != 0) {
                return res.json({
                    message: 'CONVERSATION SUCCESSFULLY FETCH',
                    responseCode: 200,
                    users: result
                })
            } else {
                return res.json({
                    message: 'FAILED TO FETCH CONVERSATION',
                    responseCode: 400,
                    users: result
                })
            }
        })
    }
)

module.exports = { getNormalConversations }