const mongoose = require('mongoose')


const chatSchema = new mongoose.Schema({
    user1:{
        type: String
    },
    user2:{
        type:  String
    }
})

const model = mongoose.model('Chat',chatSchema)
module.exports = model