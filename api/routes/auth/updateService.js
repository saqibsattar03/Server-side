const {router} = require('./../../../config/expressconfig')
const User = require('../../models/user')

let updateServices = router.patch("/update-services", async (req, res) => {
    const {id, services} = req.body;
    console.log(services)
    const result = await User.findByIdAndUpdate(id, {services:services}, {new: true})
    console.log(result)
    if (result) {
        return res.json({message: "SERVICES UPDATED SUCCESSFULLY", responseCode: 200, result});
    } else {
        return res.json({message: "ERROR", responseCode: 404, result});
    }

});


module.exports = {updateServices}