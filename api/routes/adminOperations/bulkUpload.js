const {router} = require('../../../config/expressconfig')
const upload = require('../../../config/multerForCSV')
const {csvReader} = require('../../Functions/csvReader')
const User = require('../../models/user')
const randomstring = require("randomstring")
const {sendMailForNewUserPasswordChange, sendMailForLogin} = require('../../Functions/sendMail')
let website = `http://v2.tradingseek.net`
// let website = `https://new-tradingseek.web.app`

let bulkUpload = router.post("/bulk-upload", upload.single("file"), async (req, res) => {
    let path = req.file.path;
    csvReader(path)
        .then(response => {
            let data = response;
            if (data.length < 400) {
                data.forEach(async element => {
                    let userToken = randomstring.generate();
                    element.userToken = userToken;
                    if (element.password === "" || element.password === '' || !element.password || element.password === undefined || element.password === 'null') {
                        await User.find({email: element.email}, async (err, result) => {
                            if (result && result.length === 0) {
                                const res = await User.create(element)
                                let id = res._id
                                let email = element.email;
                                let token = randomstring.generate();
                                let updatePasswordLink = `https://new-tradingseek.web.app/updatePassword?${id}${userToken}?${email}?${token}`
                                sendMailForNewUserPasswordChange(email, email, element.userName, updatePasswordLink);

                            }
                        })
                    } else {
                        await User.find({email: element.email}, async (err, result) => {
                            if (result && result.length === 0) {
                                await User.create(element, (res) => {
                                    let email = element.email
                                    sendMailForLogin(email, email, website);
                                })

                            }
                        })
                    }


                });
                return res.json({message: "Mail sent", responseCode: 200})
            } else {
                return res.json({message: "Mail not sent", responseCode: 200})
            }
        })
});

module.exports = {bulkUpload};
