const mongoose = require('mongoose')
const faqSchema = new mongoose.Schema({
    postedUserId:{
        type: Number
    },
    question:{
        type:String
    },
    answer:{
        type: String
    }
})

const model = mongoose.model('Faq',faqSchema)
module.exports = model