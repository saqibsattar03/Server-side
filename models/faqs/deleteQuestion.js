const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");

let deleteQuestion = router.post("/delete-question", (req, res) => {
    let { id } = req.body;
    // console.log(id)
    sql.deleteQuery('faqs', id, (result) => {
        return res.json({ message: "QUESTION DELETED SUCESSFULLY", responseCode: 200, result });
    });
});

module.exports = { deleteQuestion }