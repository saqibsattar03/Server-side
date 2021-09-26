const { router } = require('../../../config/expressconfig')
const profileClick = require('../profile/profileClick')

let getProfileClicked = router.get("/get-profile-clicks", async (req, res) => {
    return res.json(await profileClick.getUserGroupByData(req.body.userId, req.body.dateFilter))
});

module.exports = { getProfileClicked }