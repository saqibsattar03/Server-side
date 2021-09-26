const {router} = require('../../../config/expressconfig')
const User = require('../../models/user')
const {upload} = require('../../../config/multer')
const {url} = require('../../../config/serverRootUrl')
const bcrypt = require('bcrypt')

let updateProfileImage = router.patch("/update-profile-image", upload.single("profileImage"), async (req, res) => {
    let {id} = req.body;
    console.log(id)
    try {
        let path = req.file.path
        let replacedPath = path.replace(/[\\]/igm, "/");
        let imageUrl = url + "/" + replacedPath;
        let obj = {imageUrl}
        await User.findByIdAndUpdate(id, obj, (result) => {
            return res.json({message: "IMAGE SUCCESSFULLY UPDATED", responseCode: 200, result: imageUrl});
        })
    } catch (error) {
        return res.json({message: "IMAGE UPLOADING FAILED", responseCode: 200, result: "error"});
    }
});
let updateProfileByAttribute = router.patch("/update-profile-by-attribute/:id", async (req, res) => {
    const id = req.params.id
    const data = req.body.data
    try {
        const result = await User.findByIdAndUpdate(id, data)
        if (result && result.length != 0) {
            return res.json({message: "DATA SUCCESSFULLY UPDATED", responseCode: 200, result})
        }
    } catch (error) {
        return res.json({message: "DATA UPLOADING FAILED", responseCode: 200, result})
    }
});
let updateProfile = router.patch("/update-user", async (req, res) => {
    let {email, userName, id} = req.body

    let obj = {
        email,
        userName
    }

    const result = await User.findByIdAndUpdate(id, obj)
    if (result && result.length != 0) {
        return res.json({message: "USER UPDATED SUCCESSFULLY", responseCode: 200, result})
    } else {
        return res.json({message: "ERROR", responseCode: 404, result})
    }
});
let updatePassword = router.patch("/update-password", async (req, res) => {
    const id = req.body.id;
    const password = await bcrypt.hash(req.body.password, 10)
    const result = await User.findByIdAndUpdate({_id: id}, {password: password})
    if (result && result.length != 0) {
        return res.json({message: "PASSWORD UPDATED SUCCESSFULLY", responseCode: 200, result});
    } else {
        return res.json({message: "ERROR", responseCode: 404, result});
    }
});
let promoteAsBusinessUser = router.patch("/promote-as-business-user", async (req, res) => {
    let {id, businessName, businessProfession, location, businessABN} = req.body;
    let obj = {
        userType: "Business User",
        businessName,
        businessProfession,
        location,
        businessABN
    }
    const result = await User.findByIdAndUpdate(id, obj)
    if (result && result.length != 0) {
        return res.json({message: "PROFILE UPDATED SUCCESSFULLY", responseCode: 200, result});
    } else {
        return res.json({message: "ERROR", responseCode: 404, result});
    }
});


module.exports = {updateProfileImage, updateProfileByAttribute, updateProfile, updatePassword, promoteAsBusinessUser}
