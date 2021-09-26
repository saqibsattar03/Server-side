const {router} = require("../../config/expressconfig");
const {knex} = require('../../knex/knex');
const checkAuth = require('../auth/middleware/checkAuth')
let postChat = router.post("/post-chats", checkAuth, async (req, res) => {
    req.body.time = new Date()
    if (await knex('chcats').insert(req.body)) {
        return res.json({message: "Message sent successfully", responseCode: 200});
    }
});

module.exports = {postChat}
