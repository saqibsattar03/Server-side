const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");
const { url } = require("../../config/serverRootUrl");


//THIS API RETURNS USERS ON THE BASIS OF PROFESSION(IT MAY BE CARPENTER, ELECTRICIAN ETC)
let getUsersById = router.get("/get-users-by-id/:id", (req, res) => {
    let { id } = req.params;
    // console.log(status)
    sql.selectById('user', id, (result) => {
        if (result && result.length != 0) {
            return res.json({ message: "USER FOUND", responseCode: 200, user: result })
        }
        else {
            return res.json({ message: "USER NOT FOUND", responseCode: 404, user: result })
        }
    })
});


module.exports = { getUsersById }