const { router } = require('../../../config/expressconfig')
const User = require('../../models/user')


let getAllUsers = router.get("/get-all-users-for-editing", async (req, res) => {
    // console.log(status)
     const result = await User.find()
        if (result && result.length != 0) {
            return res.json({ message: "USERS FOUND", responseCode: 200, users: result })
        }
        else {
            return res.json({ message: "USERS NOT FOUND", responseCode: 404, user: result })
        }
});

module.exports = { getAllUsers }