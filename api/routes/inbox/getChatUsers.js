const {users} = require("../../../../frontend/src/@fake-db/apps/chat");
const {conversation} = require("../../../../frontend/src/@fake-db/apps/chat");
const {router} = require('../../../config/expressconfig')

const getChatUsers = router.get('/chat/users', (req, res) => {
    const {search} = JSON.parse(req.query.filterData);
    if (search) {
        return res.json(users.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
    }
    console.log('users', users);
    return res.json(users);
})

const getContactUsers = router.get('/chat/contact/users', (req, res) => {
    const {search} = JSON.parse(req.query.filterData);
    if (search) {
        return res.json(users.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
    }
    console.log('users', users);
    return res.json(users);
})

const getChatConversation = router.get('/chat/conversation', (req, res) => {
    const {channelId} = req.query;
    console.log('conversation', conversation);
    return res.json(conversation.filter(item => item.id === channelId)[0].conversationData);
})


module.exports = getChatUsers;
module.exports = getContactUsers;
module.exports = getChatConversation;
