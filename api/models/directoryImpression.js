const mongoose = require('mongoose')

const directorySchema = new mongoose.Schema({
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

const model = mongoose.model('DirectoryImpression',directorySchema)
module.exports = model