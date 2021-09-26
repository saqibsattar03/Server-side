const {router} = require('../../../config/expressconfig')
const Job = require('../../models/job')

let postJob = router.post('/create-job', async (req, res) => {
    const data = req.body.data
    const job = Job.create(data)
        .then(result => {
            console.log(result)
        })
        .catch(e => {
            console.log(e)
        });
    res.json({
        msg: 'job posted successfully'
    })
})

module.exports = postJob
