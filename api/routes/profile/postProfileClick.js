const { router } = require('../../../config/expressconfig')
const profileClick = require('../profile/profileClick')

let postProfileClicked = router.post("/profile-clicked", async (req, res) => {
    return res.json(await profileClick.insertData(req.body))
});

module.exports = { postProfileClicked }