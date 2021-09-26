const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig")

let addQuestion = router.post("/add-new-question", (req, res) => {
    let { id, postedUserId, question, answer } = req.body;
    let obj = {
        postedUserId,
        question,
        answer
    }
    sql.insertQuery('faqs', obj, (result) => {
        if (result) {
            return res.json({ message: "QUESTION ADDED", responseCode: 200, result });
        }
        else {
            return res.json({ message: "ERROR", responseCode: 404, result });
        }
    })
});


module.exports = { addQuestion }