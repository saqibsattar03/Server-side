const mongoose = require('mongoose')

const chatMessageSchema = new mongoose.Schema({
    senderEmail:{
        type: String
    },
    receiverEmail:{
        type: String
    },
    message:{
        type: String
    },
    createdAt:{
        type: String,
        default: Date
    },
    seenAt:{
        type: String,
        default: Date

    },
    isFavorite:{
        type: Boolean,
        default: false
    },

    // senderId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    // chatId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Chat'
    // }
})

const model = mongoose.model('ChatMessage',chatMessageSchema)
module.exports = model