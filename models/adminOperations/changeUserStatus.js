const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig")

let changeUserStatus = router.post("/change-userSelection-status", (req, res) => {
    let { id, status } = req.body;
    let obj = {
        status
    };
    sql.updateQuery('user', id, obj, (result) => {
        return res.json({ message: "USER STATUS CHANGED", responseCode: 200, result });
    });
});

module.exports = { changeUserStatus }