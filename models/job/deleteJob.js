const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");

let deleteJob = router.post("/delete-job", (req, res) => {
    let { jobId } = req.body;

    sql.deletejob('job', jobId, (result) => {
        return res.json({ message: "JOB DELETED SUCESSFULLY", responseCode: 200, result });
    });
});

module.exports = { deleteJob }