const { router } = require('../../../config/expressconfig')
const User = require('../../models/user')

let deleteUser = router.delete("/delete-user-by-id", async (req, res) => {
    let { id } = req.query;
    await User.findByIdAndDelete(id,(result=>{
        return res.json({ message: "USER SUCCESSFULLY DELETED", responseCode: 200, result });
    }))

});

module.exports = { deleteUser }
