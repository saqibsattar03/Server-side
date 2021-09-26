const {router} = require("../../config/expressconfig");
const {sql} = require("../../config/dbConfig")
const {sendMailForPasswordChange} = require("../Functions/sendMail");
const randomstring = require("randomstring");


let sendMailForForgetPassword = router.post("/send-password-change-mail", (req, res) => {
    let {id, userToken, email} = req.body;
    // let updatePasswordLink = `https://new-tradingseek.web.app//${id}/${userToken}`;http://localhost:3000/updatePassword
    let token = randomstring.generate();
    let pushObject = {
        token,
        userId: id,
        userEmail: email
    }
    sql.insertQuery('updatepasswordhistory', pushObject, (result) => {
        if (result) {
            let updatePasswordLink = `https://new-tradingseek.web.app/updatePassword?${id}?${userToken}?${email}?${token}`;
            sendMailForPasswordChange(email, email, updatePasswordLink);
            return res.json({message: "PASSWORD LINK HAS BEEN SEND SUCESSFULLY", responseCode: 200});
        } else {
            return res.json({message: "ERROR IN SENDING UPDATE PASSWORD LINK", responseCode: 400});
        }
    })
});

let validateUpdatePasswordLink = router.post("/validate-update-password-link", (req, res) => {
    let {token, userEmail} = req.body;
    sql.selectTokenAndEmailQuery(token, userEmail, (result) => {
        if (result && result.length != 0) {
            let isExpire = result[0].isExpire;
            if (isExpire === 'TRUE') {
                return res.json({message: "VALID LINK", responseCode: 200, isExpire: true})
            } else {
                return res.json({message: "EXPIRED LINK", responseCode: 200, isExpire: false})
            }
        } else {
            return res.json({message: "EXPIRED LINK", responseCode: 404, user: result})
        }
    })
});


let updateLinkStatus = router.post("/update-password-link-status", (req, res) => {
    let {token, userEmail} = req.body;
    let pushObject = {
        token,
        userEmail,
        isExpire: 'TRUE'
    }
    sql.updatePasswordLinkStatus(token, userEmail, pushObject, (result) => {
        if (result) {
            return res.json({message: "STATUS UPDATED", responseCode: 200, result})
        }
    })
});


module.exports = {sendMailForForgetPassword, validateUpdatePasswordLink, updateLinkStatus}