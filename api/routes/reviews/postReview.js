const { router } = require('../../../config/expressconfig')
const Review = require('../../models/review')
const User = require('../../models/user')

let postReview = router.post('/post-review/:receiverId',async (req,res)=>{

   await Review.create(req.body)
        .then(result=>{
            console.log(result)
            return  User.findOneAndUpdate({_id: req.params.receiverId},{$push:{review: result._id}},{new: true})
        }).then(result=>{
            res.json({
                msg: 'review added successfully',
                data: result
            })
    }).catch(err=>{
        res.json(err)
    })

})

module.exports = {postReview}