const mongoose = require('mongoose')

const profileClickSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    clickedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt:{
        type: String,
        default: Date
    }
})

const model = mongoose.model('ProfileClick',profileClickSchema)
module.exports = model