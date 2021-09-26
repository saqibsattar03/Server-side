const mongoose = require('mongoose')

const updatePasswordHistorySchema = new mongoose.Schema({
    token:{
        type: String
    },
    userId:{
        type: String
    },
    userEmail:{
        type: String
    },
    isExpire:{
        type: Boolean,
        default: true
    }
})

const model = mongoose.model('PasswordHistory',updatePasswordHistorySchema)
module.exports = model