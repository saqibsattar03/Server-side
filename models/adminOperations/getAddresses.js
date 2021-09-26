const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");


let getAddresses = router.get("/get-addresses", (req, res) => {

    sql.selectAll('addresses', (result) => {
        if (result && result.length != 0) {
            return res.json({ message: "ADDRESSES FOUND", responseCode: 200, result })
        }
        else {
            return res.json({ message: "ADDRESSES NOT FOUND", responseCode: 404, result })
        }
    })
});


module.exports = { getAddresses }