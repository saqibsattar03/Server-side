const { router } = require('../../../config/expressconfig')
const User = require('../../models/user')

let getUserById = router.get("/get-userSelection-by-id/:id", async (req, res) => {
    let { id } = req.params;
    // console.log(status)
    const result = await User.findById( id)
        if (result && result.length != 0) {
            return res.json({ message: "USER FOUND", responseCode: 200, user: result })
        }
        else {
            return res.json({ message: "USER NOT FOUND", responseCode: 404, user: result })
        }
});

module.exports = { getUserById }