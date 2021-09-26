const { router } = require('../../../config/expressconfig')
const Job = require('../../models/job')

let getJobByEmail = router.get('/get-jobs-by-email', async (req,res)=>{
    const {email} = req.body
    const job = await Job.find({'postedUserEmail': email})
    // console.log(job)
    if(job && job.length != 0){
        console.log(job)
        return res.json({
         msg: "JOb by email successfully retrieve",
         data: job
        })
    }else {
        return res.json({
            msg: "no job found"
        })
    }
})

module.exports = getJobByEmail