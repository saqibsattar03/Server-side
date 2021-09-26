const { router } = require('../../../config/expressconfig')
const Review = require('../../models/review')
const User = require('../../models/user')


let getReview = router.get('/get-reviews/:userId',async (req,res)=>{
   await User.findOne({_id: req.params.userId}).populate({ path: 'review' }).then(result=>{
        console.log("here" + result)
        if(result && result.length != 0){
            return  res.json({
                msg: "all reviews retrieved",
                data: result
            })
        }
        else {
            return res.json({
                msg: "no review found"
            })
        }
    })
})

module.exports = {getReview}