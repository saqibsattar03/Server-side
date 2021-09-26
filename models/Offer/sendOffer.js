const {router} = require("../../config/expressconfig");
const checkAuth = require('../auth/middleware/checkAuth');
const {knex} = require('../../knex/knex');
let sendOffer = router.post("/send-offers", checkAuth, async (req, res) => {
    let {jobId, businessUserEmail} = req.body;
    req.body.postedDate = new Date();
    req.body.quotation = req.body.message
    delete req.body.message
    const result = await knex('offerhistory').where({jobId, businessUserEmail}).select();
    if (!result.length) {
        if (await knex('offerhistory').insert(req.body)) {
            return res.json({message: "Quotation sent successfully", responseCode: 200});
        } else {
            return res.json({message: "Sending failed! Try again", responseCode: 401});
        }
    } else {
        return res.json({message: "You already have bid to this offers", responseCode: 200, result});
    }
});


module.exports = {sendOffer}
