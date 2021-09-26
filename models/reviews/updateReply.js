const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");

let updateReply = router.post("/update-reviews-reply", (req, res) => {
    let { id, reply, replyDate } = req.body;
    sql.updateQuery('reviews', id, req.body, (result) => {
        if (result) {
            return res.json({ message: "REPLY SUCESSFULLY UPDATED", responseCode: 200, result });
        }
    })
});

module.exports = { updateReply }