const {router} = require('../../../config/expressconfig')
const Faq = require('../../models/faq')

let deleteQuestion = router.delete('/delete-question/:postedUserId', async (req, res) => {
  const data = await Faq.findOneAndDelete({postedUserId:req.params.postedUserId},(result)=>{
      return res.json({ message: "QUESTION DELETED SUCESSFULLY", responseCode: 200, result });
  })


})

module.exports = {deleteQuestion}