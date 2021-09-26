const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");
const { sendMailForJobVerification, sendMailForEmailVerification } = require("../Functions/sendMail");
const { url } = require("../../config/serverRootUrl");

let postJob = router.post("/post-job", (req, res) => {
    let { postUserName, postAddress, postUserId, jobCategory, questionAnswers, postedDate = new Date(), postUserEmail } = req.body;
    req.body = {
        postUserName,
        postAddress,
        postUserId,
        jobCategory,
        questionAnswers,
        postedDate: new Date(),
        postUserEmail,
    }
    // console.log(req.body)

    sql.insertQuery('job', req.body, (result) => {
        return res.json({ message: "JOB POSTED SUCESSFULLY", responseCode: 200, result });
    });
});


let verifyJob = router.post("/verify-job", (req, res) => {
    let { email, categoryName } = req.body;
    // console.log(email,categoryName)
    sendMailForJobVerification(email, categoryName)
    return res.json({ message: "SEND MAIL FOR VERIFY JOB SUCESSFULLY" });
});

let sendEmailForJobVerification = router.post("/send-email-for-job-verification", (req, res) => {
    let { email, categoryName } = req.body;
    let file = url + "/staticTemplates/verifyUser.html";

    // console.log(email,categoryName)
    sendMail(email, categoryName)
    return res.json({ message: "SEND MAIL FOR VERIFY JOB SUCESSFULLY" });
});


module.exports = { postJob, verifyJob }