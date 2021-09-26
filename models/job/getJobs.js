const {router} = require("../../config/expressconfig");
const checkAuth = require('../auth/middleware/checkAuth')
const {knex} = require('../../knex/knex')

let getJobsByCategory = router.get("/get-jobs-by-category", checkAuth, async (req, res) => {
    let {profession, email} = req.query;
    const jobs = await knex('job').where({
        jobCategory: profession,
        postUserEmail: !email
    }).select();
    return res.json(jobs);
});


module.exports = {getJobsByCategory}
