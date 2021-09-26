const {router} = require('../../../config/expressconfig')
const Job = require('../../models/job')

let updateDescription = router.patch('/update-description', async (req, res) => {
    let _id = req.body.data._id
    const data = await Job.findByIdAndUpdate(_id, req.body.data)
    if (data && data.length != 0) {
        return res.json({
            message: 'description updated successfully',
            data: data
        })
    } else {
        return res.json({
            message: "description can't update"
        })
    }
    // for(let i=0;i<data.questionAnswers.length;i++){
    //     let checkCreate = 0
    //     let result = data.questionAnswers[i]
    //     if(result.pushedQuestion == 'category'){
    //        if(!result.answer_textarea){
    //            // await Job.create({},{'$set':{'questionAnswers.$.answer_textarea':req.body}})
    //            data.questionAnswers.push({'answer_textarea':req.body})
    //            checkCreate = 1
    //            console.log('insert query goes here')
    //
    //            // if(result.answer_textarea != '' && result.answer_textarea != undefined) {
    //            //     console.log('here')
    //            //     //     // await .update_one({$set:{answer_textarea:req.body}})
    //            //     // }
    //            // }
    //            // else {
    //            //     console.log('insert query goes here')
    //            // }
    //        }
    //        else {
    //            result.answer_textarea = req.body
    //            // await Job.updateOne({'questionAnswers.id':req.body.id},{'$set':{'questionAnswers.$.answer_textarea':req.body}},{new: true})
    //            console.log("update query goes here")
    //        }
    //
    //     }
    //     else {
    //         console.log('textarea not found')
    //     }
    //     if(checkCreate == 0) {
    //         data.questionAnswers[i] = result
    //     }
    // }
    // await Job.findByIdAndUpdate(data._id,data).exec()

})

module.exports = updateDescription
