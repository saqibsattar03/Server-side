const { router } = require('../../../config/expressconfig')
const Faq = require('../../models/faq')

let addQuestion = router.post('/add-new-question',(req,res)=>{
    let { id, postedUserId, question, answer } = req.body;
    let obj = {
        postedUserId,
        question,
        answer
    }
    Faq.create(obj).then(result=>{
        console.log(result)
    }).catch(error=>{
        console.log(error)
    })
    return res.status(200).json({
        msg:"New Question added successfully"
    })
})

module.exports = { addQuestion }