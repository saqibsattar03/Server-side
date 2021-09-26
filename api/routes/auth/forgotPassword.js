const {router} = require('../../../config/expressconfig')
const {sendMailForPasswordChange} = require('../../Functions/sendMail')
const PasswordHistory = require('../../models/passwordHistory')
const {url} = require('../../../config/serverRootUrl')
const randomstring = require("randomstring");

let sendMailForForgetPassword = router.post("/send-password-change-mail", (req, res) => {
    let {id, userToken, email} = req.body;
    let token = randomstring.generate();
    let pushObject = {
        token,
        userId: id,
        userEmail: email
    }
    const result = PasswordHistory.create(pushObject)
    if (result && result.length != 0) {
        let updatePasswordLink = `https://new-tradingseek.web.app/updatePassword?${id}?${userToken}?${email}?${token}`;
        sendMailForPasswordChange(email, email, updatePasswordLink);
        return res.json({message: "PASSWORD LINK HAS BEEN SEND SUCCESSFULLY", responseCode: 200});
    } else {
        return res.json({message: "ERROR IN SENDING UPDATE PASSWORD LINK", responseCode: 400});
    }
});

module.exports = {sendMailForForgetPassword}
