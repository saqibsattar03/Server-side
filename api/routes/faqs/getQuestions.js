const {router} = require('../../../config/expressconfig')
const Faq = require('../../models/faq')


let getQuestions = router.get("/get-faq-questions", async (req, res) => {
    const data = await Faq.find({postedUserId: req.body.postedUserId})
    if(data){
        return res.json({ message: "QUESTIONS GET", responseCode: 200, questions : data })
    }else {
        return res.json({ message: "QUESTIONS NOT FOUND", responseCode: 404, questions: data})
    }

});

module.exports = {getQuestions}