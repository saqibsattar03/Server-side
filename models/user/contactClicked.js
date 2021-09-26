const {router} = require("../../config/expressconfig");
const checkAuth = require('../auth/middleware/checkAuth')
const contact_click = require('./contact_click')

router.post("/contact-clicked", async (req, res) => {
    return res.json(await contact_click.insertData(req.body));
});

router.get("/get-contact-clicks", checkAuth, async (req, res) => {
    return res.json(await contact_click.getUserGroupByData(req.query.user_id, req.query.dateFilter));
});

module.exports = router
