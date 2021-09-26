const mongoose = require('mongoose')
const jobSchema = new mongoose.Schema({

    postUserName: {
        type: String
    },
    postAddress: {
        type: String
    },
    postUserId: {
        type: mongoose.Schema.Types.ObjectId
    },
    questionAnswers: [
        {
            type: Object
        }
    ],
    postedDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'PENDING'
    },
    reason: {
        type: String,
    },
    postUserEmail: {
        type: String,
    },
    postUserMobile: {
        type: String,
    },
})

const model = mongoose.model('Job', jobSchema)
module.exports = model
