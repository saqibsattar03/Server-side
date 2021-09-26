const {router} = require('../../../config/expressconfig')
const Job = require('../../models/job')

let updateJobStatus = router.patch('/update-job-status/:_id', async (req, res) => {
    const id = req.params._id
    const obj = req.body
    const result = await Job.findByIdAndUpdate(id, obj)
    console.log(result)
    if (result && result.length !== 0) {
        return res.json({
            message: 'Status Updated Successfully',
            data: result,

        })
    } else {
        return res.json({
            message: "Status can't be updated"
        })
    }

});

module.exports = updateJobStatus
