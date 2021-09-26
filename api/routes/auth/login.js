const {router} = require('../../../config/expressconfig')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const secret_key = require('../../../secret_key')
const {checkToken} = require('../auth/middleware/checkAuth')
const {url} = require('../../../config/serverRootUrl')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

//SIMPLE LOGIN API

let userLoginApi = router.post('/login-user', async (req, res) => {
    let {email, password} = req.body
    const user = await User.findOne({'email': email})
    await bcrypt.compare(password, user.password,(err,result) => {
        if (err) {
            return res.status(401).json({
                message: 'Auth failed'
            })
        }

        if (result) {
            delete user.password
            const token = jwt.sign({
                    _id: user._id
                },
                secret_key.JWT_SECRET_KEY,
                {
                    expiresIn: "24h"
                });
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


// VERIFY USER BY EMAIL

let verifyUser = router.get('/verify-user/:email', async (req, res) => {
    let email = req.params.email;
    let obj = {
        isVerified: true,
        email
    };

    let result = await User.findOneAndUpdate({email}, obj)
        if (!result) {
            return res.send("sorry this email does not exists");
        } else {
            let file = url + "/staticTemplates/verifyUser.html";
            return res.redirect(file);
        }

});

let userSocialLogin = router.post("/social-login/", async (req, res) => {
    let {provider, uid, email, userName} = req.body;
    console.log(req.body)

    if (provider == "facebook.com") {
        let userobj = {
            fbUid: uid,
            email: email,
            userName
        }
        let result = await User.find({'email':email})
            if (result && result.length != 0) {
                if (!result[0].fbUid) {
                   let result = await User.findOneAndUpdate( email, userobj)
                        return res.json({message: "USER UID UPDATED SUCCESSFULLY", responseCode: 200, user: result})
                } else {
                    return res.json({message: "USER UID ALREADY UPDATED", responseCode: 200, user: result})
                }
            } else {
                let result =await User.create(userobj)
                    const newUser =await User.findById( userobj.fbUid)
                        return res.json({message: "USER NOT FOUND", responseCode: 404, user: newUser})

            }

    } else if (provider == "google.com") {
        console.log('here')
        let userobj = {
            gmailUid: uid,
            email: email,
            userName
        }

        let result = await User.find({'email':email})
            if (result && result.length != 0) {
                if (!result[0].gmailUid) {
                    let result = await User.findOneAndUpdate( {email}, userobj)
                        return res.json({message: "USER UID UPDATED SUCCESSFULLY", responseCode: 200, user: result})
                } else {
                    return res.json({message: "USER UID ALREADY UPDATED", responseCode: 200, user: result})
                }
            } else {
                let result =await User.create(userobj)
                console.log(result)
                const newUser =await User.findById( userobj.fbUid)
                        return res.json({message: "USER NOT FOUND", responseCode: 404, user: newUser})

            }
    } else {
        return res.json({message: "USER NOT FOUND", responseCode: 404, user: "not found"})
    }
});




let me = router.post('/auth/me', async (req, res) => {
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, secret_key.JWT_SECRET_KEY);
        } catch (e) {
            return res.status(401).sendStatus('unauthorized');
        }
        var userId = decoded._id;
        // Fetch the userSelection by id
        User.findOne({_id: userId}).then(function (user) {
            // Do something with the userSelection
            delete user.password;
            console.log('user', user);
            return res.json({user})
        });
    }
})
let logout = router.post('/auth/logout', async (req, res) => {
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, secret_key.JWT_SECRET_KEY);
            return res.json({result: decoded})
        } catch (e) {
            return res.status(401).json('unauthorized');
        }
    }
})

module.exports = {userLoginApi, me, logout,verifyUser, userSocialLogin}

