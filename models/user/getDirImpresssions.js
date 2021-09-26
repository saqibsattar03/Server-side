const {router} = require("../../config/expressconfig");
const checkAuth = require('../auth/middleware/checkAuth')
const dir_impressions = require('./dir_impressions')

router.get("/get-dir-impressions", checkAuth, async (req, res) => {
    return res.json(await dir_impressions.getUserGroupByData(req.query.user_id, req.query.dateFilter));
});

module.exports = router
