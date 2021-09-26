const { router } = require('../../../config/expressconfig')
const User  = require('../../models/user')

let changeUserStatus = router.patch("/change-user-status", async (req, res) => {
    let { id, status } = req.body;
    let obj = {
        status
    };
    const result = await User.findByIdAndUpdate(id,obj)
    if(result && result.length != 0) {
        return res.json({
            msg: 'User Status updated successfully',
            data: result
        })
    }
    else {
            return res.json({
                msg: "User status can not be updated"
            })
        }

});

module.exports = { changeUserStatus }