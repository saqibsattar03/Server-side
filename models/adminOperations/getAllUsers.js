const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");
const { url } = require("../../config/serverRootUrl");


//THIS API RETURNS USERS ON THE BASIS OF STATUS(IT MAY BE ACTIVE, PENDING AND DISABLED)
let getAllUsers = router.get("/get-all-users-for-editing", (req, res) => {
    // console.log(status)
    sql.selectAllUsersForEditing((result) => {
        if (result && result.length != 0) {
            return res.json({ message: "USERS FOUND", responseCode: 200, users: result })
        }
        else {
            return res.json({ message: "USERS NOT FOUND", responseCode: 404, user: result })
        }
    })
});


module.exports = { getAllUsers }