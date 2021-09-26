const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");

let getPriceByAddress = router.post("/get-price-by-adddress", (req, res) => {
    let { postAddress } = req.body;

    console.log(postAddress)
    sql.selectPriceByAddress('addresses', postAddress, (result) => {
        if (result && result.length != 0) {
            return res.json({ message: "PRICE FOUND", responseCode: 200, price: result })
        }
        else {
            return res.json({ message: "PRICE NOT FOUND", responseCode: 400, price: result })
        }
        // return res
    })
});


module.exports = { getPriceByAddress }