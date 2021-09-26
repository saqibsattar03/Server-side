const {router} = require('../../../config/expressconfig')
const contactClick = require('../../routes/user/contactClick')


let postContactClicked = router.post("/contact-clicked", async (req, res) => {
    return res.json(await contactClick.insertData(req.body))
});

let getContactClicked = router.get("/get-contact-clicks", async (req, res) => {
    return res.json(await contactClick.getUserGroupByData(req.body.userId, req.body.dateFilter))
});

module.exports = postContactClicked
module.exports = getContactClicked