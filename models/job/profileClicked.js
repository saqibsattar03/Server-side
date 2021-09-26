const {router} = require("../../config/expressconfig");
const checkAuth = require('../auth/middleware/checkAuth')
const profile_click = require('../profile_click')

router.post("/profile-clicked", async (req, res) => {
    return res.json(await profile_click.insertData(req.body));
});

router.get("/get-profile-clicks", checkAuth, async (req, res) => {
    return res.json(await profile_click.getUserGroupByData(req.query.user_id, req.query.dateFilter));
});


module.exports = router
