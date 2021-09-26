const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
    jobId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    },
    businessUserEmail:{
        type:String
    },
    quotation:{
        type: String
    },
    postedDate:{
        type: Date
    }

})

const model = mongoose.model('Offer',offerSchema)
module.exports = model