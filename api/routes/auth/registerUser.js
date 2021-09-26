let {router} = require('../../../config/expressconfig');
const bcrypt = require('bcrypt');
const randomstring = require("randomstring");
const {sendMailForEmailVerification} = require('../../Functions/sendMail');
const {url} = require('../../../config/serverRootUrl');
const User = require('../../models/user');
const logger = require('../../../config/logger')

let userRegistration = router.post("/register/user", (req, res) => {
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
                    registrationDate = new Date,
                    review,
                    gmailUid,
                    fbUid,
                    status
                } = req.body;
                let file = url + "/verify-user/" + req.body.email;
                sendMailForEmailVerification(req.body.email, req.body.userName, file)
                let user = await User.findOne({'email': req.body.email})
                if (!user) {
                    let file = url + "/verify-user/" + email;
                    sendMailForEmailVerification(email, userName, file)
                    if (user = await User.create({
                        userName,
                        email,
                        password: hash,
                        userType,
                        registrationDate,
                        userToken,
                        review,
                        gmailUid,
                        fbUid,
                        status

                    }))
                        logger.info('User Registered Successfully');
                    return res.json({message: "USER REGISTERED SUCCESSFULLY", responseCode: 200});
                }
                logger.error('USER OF THIS EMAIL IS ALREADY EXISTS')
                return res.status(400).send({
                    message: 'USER OF THIS EMAIL IS ALREADY EXISTS'
                });
                // return res.json({message: "USER OF THIS EMAIL IS ALREADY EXISTS", responseCode: 404})
            } else {
                let {
                    businessABN,
                    businessName,
                    businessProfession,
                    email,
                    location,
                    mobile,
                    userName,
                    services,
                    userType = "Business User",
                    review,
                    gmailUid,
                    fbUid,
                    status,
                    userToken = randomstring.generate(),
                    registrationDate = new Date()
                } = req.body;

                const user = await User.findOne({'email': req.body.email})
                if (!user) {
                    let file = url + "/verify-user/" + email;
                    sendMailForEmailVerification(email, userName, file)
                    const newBusinessUser = User.create({
                        businessABN,
                        businessName,
                        businessProfession,
                        userToken,
                        email,
                        location,
                        mobile,
                        password: hash,
                        userName,
                        userType,
                        registrationDate,
                        review,
                        services,
                        gmailUid,
                        fbUid,
                        status
                    })
                    {
                        return res.json({message: "BUSINESS USER REGISTERED SUCCESSFULLY", responseCode: 200});
                    }
                }
                return res.json({message: "BUSINESS USER OF THIS EMAIL IS ALREADY EXISTS", responseCode: 404});
            }
        }
    })

});

module.exports = {userRegistration}
