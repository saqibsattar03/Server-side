const {router} = require("../../config/expressconfig");
const {sql} = require("../../config/dbConfig")
const randomstring = require("randomstring");
const {sendMailForEmailVerification} = require("../Functions/sendMail");
const {url} = require("../../config/serverRootUrl");
const {knex} = require('../../knex/knex')
const bcrypt = require('bcrypt')

let userRegistration = router.post("/register/userSelection", (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            if (req.body.userType === "Normal User") {
                let {
                    userName, email, userType,
                    userToken = randomstring.generate(),
                    registrationDate = new Date
                } = req.body;
                let user = await knex('user').where({email}).select();
                if (!user.length) {
                    let file = url + "/verify-userSelection/" + email;
                    sendMailForEmailVerification(email, userName, file);
                    if (user = await knex('user').insert({
                        userName,
                        email,
                        password: hash,
                        userType,
                        userToken,
                        registrationDate
                    }))
                        return res.json({message: "USER REGISTERED SUCCESSFULLY", responseCode: 200, user});
                }
                return res.json({message: "USER OF THIS EMAIL IS ALREADY EXISTS", responseCode: 404, user: user})
            } else {
                let {
                    businessABN,
                    businessName,
                    businessProfession,
                    email,
                    location,
                    mobile,
                    userName,
                    userType,
                    userToken = randomstring.generate(),
                    registrationDate = new Date()
                } = req.body;
                let user = await knex('user').where({email}).select();
                if (!user.length) {
                    if (user = await knex('user').insert({
                        businessABN, businessName, businessProfession,
                        email, location, mobile, password: hash, userName, userType, userToken, registrationDate
                    })) {
                        return res.json({message: "USER REGISTERED SUCCESSFULLY", responseCode: 200, user});
                    }
                }
                return res.json({message: "USER OF THIS EMAIL IS ALREADY EXISTS", responseCode: 404, user})
            }
        }
    })

});

module.exports = {userRegistration}
