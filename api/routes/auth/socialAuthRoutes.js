const {router} = require('../../../config/expressconfig')
const passport = require('passport')
const User = require('../../models/user')

// Auth with Google

let authWithGoogle = router.get('/auth/google/simpleUser', passport.authenticate('google',
    {scope: ['profile', 'email']}, function () {
    }));


// Google Auth Callback

let googleCallBackForSimpleUser = router.get('/auth/google/callback/simpleUser', passport.authenticate('google'), (err, req, res, next) => {
        if (err.name === 'TokenError') {

            // redirect them back to the login page

            res.redirect('/auth/google');
        } else {
            console.log(err)

            // throw new Error('some other error')
        }
    }, (req, res) => {
        let obj = req.user

        // On success, redirect back to '/signup page'

        res.redirect('http://localhost:3000/signup/userName=' + obj.displayName + '/email=' + obj.emails[0].value)
    }
)

//

let authWithGoogleForBusinessUser = router.get('/auth/google/businessUser', passport.authenticate('google',
    {scope: ['profile', 'email']}, function () {
    }));

let googleCallBackForBusinessUser = router.get('/auth/google/callback/businessUser', passport.authenticate('google'), (err, req, res, next) => {
        if (err.name === 'TokenError') {

            // redirect them back to the login page

            res.redirect('/auth/google');
        } else {
            console.log(err)

            // throw new Error('some other error')
        }
    }, (req, res) => {
        let obj = req.user

        // On success, redirect back to '/signup page'

        res.redirect('http://localhost:3000/signup-business/userName=' + obj.displayName + '/email=' + obj.emails[0].value)
    }
)

//


// Auth with LinkedIn

let authWithLinkedIn = router.get('/auth/linkedin', passport.authenticate('linkedin',
    () => {
        console.log('hello')
    }))


// LinkedIn Auth Callback

let linkedInCallBack = router.get('/auth/linkedin/callback', passport.authenticate('linkedin'), (err, req, res, next) => {
        if (err.name === 'TokenError') {
            res.redirect('/auth/linkedin'); // redirect them back to the login page
        } else {
            // throw new Error('some other error')
            console.log(err)
        }
    }, (req, res) => {
        // On success, redirect back to '/'
        // res.redirect('http://v2.tradingseek.net/home/my-jobs');
        res.send('success')
    }
)

//Facebook Auth error
let facebookAuthError = router.get('/auth/error', (req, res) => res.send('Unknown Error'))

// Auth with Facebook

let authWithFacebook = router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}))

// FaceBook Auth Callback

let facebookCallBack = router.get('/auth/facebook/callback', passport.authenticate('facebook'), (err, req, res, next) => {
        if (err.name === 'TokenError') {
            res.redirect('/auth/facebook'); // redirect them back to the login page
        } else {
            // throw new Error('some other error')
            console.log(err)
        }
    }, (req, res) => {
        // On success, redirect back to '/'
        // res.redirect('http://v2.tradingseek.net/home/my-jobs');
        res.send('success')
    }
)

module.exports = {
    authWithGoogle,
    googleCallBackForSimpleUser,
    authWithLinkedIn,
    linkedInCallBack,
    authWithFacebook,
    facebookCallBack,
    facebookAuthError,
    authWithGoogleForBusinessUser,
    googleCallBackForBusinessUser

}