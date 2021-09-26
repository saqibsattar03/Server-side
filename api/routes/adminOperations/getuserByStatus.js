const { router } = require('../../../config/expressconfig')
const User = require('../../models/user')

    //THIS API RETURNS USERS ON THE BASIS OF STATUS(IT MAY BE ACTIVE, PENDING AND DISABLED)
let getUsersByStatus = router.get("/get-users-by-status", async (req, res) => {
    let { status } = req.body;
    // console.log(status)
    const result = await User.find( {status})
        if (result && result.length != 0) {
            return res.json({ message: "USERS FOUND", responseCode: 200, users: result })
        }
        else {
            return res.json({ message: "USERS NOT FOUND", responseCode: 404, user: result })
        }
});


module.exports = { getUsersByStatus }