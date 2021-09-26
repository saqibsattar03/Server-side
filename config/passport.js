const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../api/models/user')
const randomstring = require("randomstring");

module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: 'http://localhost:4000/auth/google/callback',
            },
            async (accessToken, refreshToken, profile, done) => {
                console.log(profile)
                //get the user data from google

                const newUser = {
                    googleId: profile.id,
                    userName: profile.displayName,
                    email: profile.emails[0].value,
                    imageUrl: profile.photos[0].value,
                    password: 'newuser',
                    isVerified: profile.emails[0].verified,
                    token: accessToken,
                    tempToken:randomstring.generate(),
                    userToken: randomstring.generate()
                }

                try {
                    //find the user in our database
                    let user = await User.findOne({email: profile.emails[0].value})
                    //If user present in database
                    if (user) {
                        if (user.googleId === '' && user.imageUrl === null) {
                            await User.findOneAndUpdate({email: profile.emails[0].value},
                                {googleId: profile.id,imageUrl: profile.photos[0].value})
                        } else {
                            console.log('This email is already associated with other account')
                        }
                        return done(null, user)
                    } else {
                        // if user is not preset in our database save user data to database.
                        user = await User.create(newUser)
                        return done(null, user)


                    }
                } catch (e) {
                    throw new Error ('some error')
                }
            }
        )
    )

    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        done(null, id)
        // User.findById(id, (err, user) => done(err, user))
    });
}
