const {router} = require('../../../config/expressconfig')
const Job = require('../../models/job')

const getAllJobs = router.get('/get-all-jobs', async (req, res) => {
    const jobs = await Job.find()
    res.status(200).json({
        msg: "All Jobs Retrieved Successfully",
        data: jobs
    })
})

module.exports = getAllJobs