const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig");
const { upload } = require("../../config/multer");
const { url } = require("../../config/serverRootUrl");


let updateProfileImage = router.post("/update-profile-image", upload.single("profileImage"), (req, res) => {
    let { id } = req.body;
    try {
        let path = req.file.path
        let replacedPath = path.replace(/[\\]/igm, "/");
        let imageUrl = url + "/" + replacedPath;
        let obj = { imageUrl }
        sql.updateQuery('user', id, obj, (result) => {
            if (result) {
                return res.json({ message: "IMAGE SUCESSFULLY UPDATED", responseCode: 200, result: imageUrl });
            }
        })
    }
    catch (error) {
        return res.json({ message: "IMAGE UPLOADING FAILED", responseCode: 200, result: "error" });
    }
});


let updateProfileByAttribute = router.post("/update-profile-by-attribute", (req, res) => {
    let { id, data } = req.body;
    try {
        sql.updateQuery('user', id, data, (result) => {
            if (result) {
                return res.json({ message: "DATA SUCESSFULLY UPDATED", responseCode: 200, result });
            }
        })
    }
    catch (error) {
        return res.json({ message: "DATA UPLOADING FAILED", responseCode: 200, result });
    }
});


let updateProfile = router.post("/update-userSelection", (req, res) => {
    let { email, userName, id } = req.body;
    let obj = {
        email,
        userName
    }
    sql.updateQuery('user', id, obj, (result) => {
        if (result) {
            return res.json({ message: "USER UPDATED SUCESSFULLY", responseCode: 200, result });
        }
        else {
            return res.json({ message: "ERROR", responseCode: 404, result });
        }
    })
});


let updatePassword = router.post("/update-password", (req, res) => {
    let { id, password, lastPasswordChangeDate } = req.body;
    let obj = {
        password,
        lastPasswordChangeDate
    }
    sql.updateQuery('user', id, obj, (result) => {
        if (result) {
            return res.json({ message: "PASSWORD UPDATED SUCESSFULLY", responseCode: 200, result });
        }
        else {
            return res.json({ message: "ERROR", responseCode: 404, result });
        }
    })
});


let promoteAsBusinessUser = router.post("/promote-as-business", (req, res) => {
    let { id, businessName, businessProfession, location, businessABN } = req.body;
    let obj = {
        userType: "Business User",
        businessName,
        businessProfession,
        location,
        businessABN
    }
    sql.updateQuery('user', id, obj, (result) => {
        if (result) {
            return res.json({ message: "PROFILE UPDATED SUCESSFULLY", responseCode: 200, result });
        }
        else {
            return res.json({ message: "ERROR", responseCode: 404, result });
        }
    })
});


module.exports = { updateProfile, updatePassword, promoteAsBusinessUser, updateProfileImage, updateProfileByAttribute }