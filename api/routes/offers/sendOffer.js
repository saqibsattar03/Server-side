const { router } = require('../../../config/expressconfig')
const Offer = require('../../models/offer')

let sendOffer = router.post('/send-offers',async (req,res)=>{
    const {jobId, businessUserEmail,quotation, postedDate = new Date()} = req.body
     const result = await Offer.find({'jobId':jobId, 'businessUserEmail' :businessUserEmail})
    if (!result.length) {
        if (await Offer.create(req.body)) {
            return res.json({message: "Quotation sent successfully", responseCode: 200});
        } else {
            return res.json({message: "Sending failed! Try again", responseCode: 401});
        }
    } else {
        return res.json({message: "You already have bid to this offers", responseCode: 200, result});
    }
})

module.exports = sendOffer