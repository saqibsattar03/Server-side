const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig")

let updatePrice = router.post("/update-price", async (req, res) => {
    let { adddressId, price } = req.body;
    // console.log(req.body)
    let obj = {
        price
    };
    sql.updatePriceQuery('addresses', adddressId, obj, (result) => {
        return res.json({ message: "PRICE UPDATED SUCCESSFULLY", responseCode: 200, result });
    });
});

module.exports = { updatePrice }