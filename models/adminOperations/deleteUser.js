const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");
const { url } = require("../../config/serverRootUrl");


let deleteUser = router.post("/delete-userSelection-by-id", async (req, res) => {
    let { id } = req.body;
    sql.deleteQuery('user', id, (result) => {
        return res.json({ message: "USER SUCCESSFULLY DELETED", responseCode: 200, result });
    });
});

module.exports = { deleteUser }