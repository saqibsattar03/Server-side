const {router} = require("../../config/expressconfig");
const checkAuth = require('../auth/middleware/checkAuth')
const {knex} = require('../../knex/knex');
let getJobsByEmail = router.get("/get-jobs-by-email", checkAuth, async (req, res) => {
    let {email} = req.query;
    const jobs = await knex('job').where('postUserEmail', email).select();
    return res.json(jobs);
});


module.exports = {getJobsByEmail}
