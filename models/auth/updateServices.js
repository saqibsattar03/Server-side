const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig")

let updateServices = router.post("/update-services", (req, res) => {
    let { id, services } = req.body;
    sql.updateServices(id, services, (result) => {
        if (result) {
            return res.json({ message: "SERVICES UPDATED SUCESSFULLY", responseCode: 200, result });
        }
        else {
            return res.json({ message: "ERROR", responseCode: 404, result });
        }
    })
});


module.exports = { updateServices }