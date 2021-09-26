const {router} = require('../../../config/expressconfig')
const Review = require('../../models/review')

let updateReview = router.patch('/update-review/:id',async (req,res)=>{
    const id = req.params.id

    const data =await Review.findByIdAndUpdate(id,req.body)
    if(data && data.length != 0){
        return res.json({
            msg: 'review updated successfully',
            data: data
        })
    }
    else {
        return res.json({
            msg: "review can not be updated"
        })
    }
})

module.exports = {updateReview}