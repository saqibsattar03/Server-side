const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig")


//SIMPLE LOGIN API
let getQuestions = router.get("/get-faq-questions/:postedUserId", (req, res) => {
    let { postedUserId } = req.params;

    sql.selectFAQsQuestion('faqs', postedUserId, (result) => {
        if (result && result.length != 0) {
            return res.json({ message: "QUESTIONS GET", responseCode: 200, questions: result })
        }
        else {
            return res.json({ message: "QUESTIONS NOT FOUND", responseCode: 404, questions: result })
        }
    })
});

module.exports = { getQuestions }