const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");

let addReview = router.post("/post-reviews", (req, res) => {
    let { date, postedUserEmail, businessCategory, postedUserName, description, stars, businessUserId, postedUserId } = req.body;
    // console.log(req.body)
    sql.insertQuery('reviews', req.body, (result) => {
        return res.json({ message: "REVIEW POSTED SUCESSFULLY", responseCode: 200, result });
    });
});



module.exports = { addReview }