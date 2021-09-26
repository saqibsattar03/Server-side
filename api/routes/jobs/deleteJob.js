const { router } = require('../../../config/expressconfig')
const Job = require('../../models/job')

let deleteJob = router.delete('/delete-job/:id',async (req,res)=>{
    const id = req.params.id
    try {
        const result =await Job.findByIdAndDelete(id)
        res.json({
            msg: "Job deleted Successfully",
            data: result
        })
    }
    catch (e){
        console.log(err.message)
    }
})

module.exports = deleteJob