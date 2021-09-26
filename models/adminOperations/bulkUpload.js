const { router } = require("../../config/expressconfig");
const upload = require("../../config/multerForCSV");
const { csvReader } = require("../../models/Functions/csvReader");
const { sql } = require("../../config/dbConfig");
const { sendMailForNewUserPasswordChange, sendMailForLogin } = require("../Functions/sendMail");
const randomstring = require("randomstring");
let website = `https://new-tradingseek.web.app`;

let bulkUpload = router.post("/bulk-upload", upload.single("file"), async (req, res) => {
    let path = req.file.path;
    csvReader(path)
        .then(response => {
            let data = response;
            if (data.length < 400) {
                data.forEach(element => {
                    let userToken = randomstring.generate();
                    element.userToken = userToken;
                    if (element.password === "" || element.password === '' || !element.password || element.password === undefined || element.password === 'null') {
                        sql.selectByEmail('user', { email: element.email }, (result) => {
                            if (result && result.length === 0) {
                                sql.insertQuery('user', element, (res) => {
                                    let id = res.insertId;
                                    let email = element.email;
                                    let token = randomstring.generate();
                                    let updatePasswordLink = `https://new-tradingseek.web.app/updatePassword?${id}?${userToken}?${email}?${token}`;
                                    sendMailForNewUserPasswordChange(email, email, res.userName, updatePasswordLink);
                                })
                            }
                        })
                    }
                    else {
                        sql.selectByEmail('user', { email: element.email }, (result) => {
                            if (result && result.length === 0) {
                                sql.insertQuery('user', element, (res) => {
                                    let email = element.email;
                                    sendMailForLogin(email, email, website);
                                })
                            }
                        })
                    }
                });
                return res.json({ message: "Mail sended", responseCode: 200 })
            }
            else {
                return res.json({ message: "Mail not sended", responseCode: 200 })
            }

        })
});

module.exports = { bulkUpload };