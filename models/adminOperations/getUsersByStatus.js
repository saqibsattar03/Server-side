const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");
const { url } = require("../../config/serverRootUrl");


//THIS API RETURNS USERS ON THE BASIS OF STATUS(IT MAY BE ACTIVE, PENDING AND DISABLED)
let getUsersByStatus = router.get("/get-users-by-status/:status", (req, res) => {
    let { status } = req.params;
    // console.log(status)
    sql.selectByStatus('user', status, (result) => {
        if (result && result.length != 0) {
            return res.json({ message: "USERS FOUND", responseCode: 200, users: result })
        }
        else {
            return res.json({ message: "USERS NOT FOUND", responseCode: 404, user: result })
        }
    })
});


module.exports = { getUsersByStatus }