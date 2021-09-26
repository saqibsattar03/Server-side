const {router} = require("../../config/expressconfig");
const {sql} = require("../../config/dbConfig");
const {url} = require("../../config/serverRootUrl");
const {knex} = require("../../knex/knex");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

//SIMPLE LOGIN API


let userLoginApi = router.post("/login-userSelection", async (req, res) => {
    let {email, password} = req.body;
    const user = await knex('user').where({email}).first()
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return res.status(401).json({
                message: 'Auth failed'
            })
        }
        if (result) {
            user.password = '';
            const token = jwt.sign({
                    email: user.email,
                },
                process.env.JWT_SECRET_KEY,
                {}
            );
            return res.status(200).json({
                message: 'Auth successful',
                token: token,
                user: user
            })
        }
        res.status(401).json({
            message: 'Auth failed'
        })
    })
});

//FB AND GMAIL INFO SAVE TO THE SYSTEM
let userSocialLogin = router.post("/social-login/", (req, res) => {
    let {provider, uid, email, userName} = req.body;
    console.log(req.body)

    if (provider == "facebook.com") {
        let userobj = {
            fbUid: uid,
            email: email,
            userName
        }
        sql.selectByEmail('user', req.body, (result) => {
            if (result && result.length != 0) {
                if (!result[0].fbUid) {
                    sql.updateFbQuery('user', email, userobj, (result) => {
                        return res.json({message: "USER UID UPDATED SUCCESSFULLY", responseCode: 200, user: result})
                    });
                } else {
                    return res.json({message: "USER UID ALREADY UPDATED", responseCode: 200, user: result})
                }
            } else {
                sql.insertQuery('user', userobj, (respons) => {
                    console.log(respons)
                    sql.selectByFbId('user', userobj, (newUser) => {
                        return res.json({message: "USER NOT FOUND", responseCode: 404, user: newUser})
                    })
                })
            }
        });

    } else if (provider == "google.com") {
        let userobj = {
            gmailUid: uid,
            email: email,
            userName
        }

        sql.selectByEmail('user', req.body, (result) => {
            // console.log(result)
            if (result && result.length != 0) {
                // console.log(result[0].gmailUid)
                if (!result[0].gmailUid) {
                    sql.updateGmailQuery('user', email, userobj, (result) => {
                        return res.json({message: "USER UID UPDATED SUCCESSFULLY", responseCode: 200, user: result})
                    });
                } else {
                    return res.json({message: "USER UID ALREADY UPDATED", responseCode: 200, user: result})
                }
            } else {
                sql.insertQuery('user', userobj, (respons) => {
                    // console.log(respons)
                    sql.selectByGmailId('user', userobj, (newUser) => {
                        return res.json({message: "USER NOT FOUND", responseCode: 404, user: newUser})
                    })
                })
            }
        });
    } else {
        return res.json({message: "USER NOT FOUND", responseCode: 404, user: "not found"})
    }
});

// CHECK EMAIL IS EXISTS IN THE SYSTEM OR NOT
let validateEmailApi = router.get("/validateEmail/:email", (req, res) => {
    // let { email, password } = req.params;
    sql.selectByEmail('user', req.params, (result) => {
        if (result && result.length != 0) {
            return res.json({message: "EMAIL FOUND", responseCode: 200, user: result})
        } else {
            return res.json({message: "EMAIL NOT FOUND", responseCode: 404, user: result})
        }
    })
});

// VERIFY USER BY EMAIL
let verifyUser = router.get("/verify-userSelection/:email", (req, res) => {
    let {email} = req.params;
    let obj = {
        isVerified: 'Verified',
        email
    }

    sql.updateUserVerificationQuery('user', email, obj, (result) => {
        if (result && result.affectedRows == 0) {
            return res.send("sorry this email is not exists");
        } else {
            let file = url + "/staticTemplates/verifyUser.html";
            return res.redirect(file);
        }
    });
});


module.exports = {userLoginApi, userSocialLogin, validateEmailApi, verifyUser}
