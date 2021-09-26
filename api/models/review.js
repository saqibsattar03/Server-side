const mongoose = require('mongoose')

let reviewSchema = new mongoose.Schema({
    reviewSender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postedUserName:{
        type: String
    },
    postedUserEmail:{
      type: String
    },
    star: {
        type: Number
    },
    review: {
        type: String
    },
    status: {
        type: String,
        default: 'pending'
    },
    businessCategory: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now

    }
});


const model = mongoose.model('Review', reviewSchema)
module.exports = model