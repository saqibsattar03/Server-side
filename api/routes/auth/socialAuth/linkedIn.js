const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const User = require('../../../models/user')
const randomstring = require("randomstring")

module.exports = function (passport) {
    passport.use(
        new LinkedInStrategy(
            {
                clientID: process.env.LINKEDIN_CLIENT_ID,
                clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
                callbackURL: 'http://localhost:4000/auth/linkedin/callback',
                scope: ['r_emailaddress', 'r_liteprofile'],
                profileFields: ['id', 'first-name', 'last-name', 'email-address','public-profile-url'],
                state: true

            },
            async (accessToken, refreshToken, profile, done) => {
                console.log(profile)

                //get the user data from LinkedIn

                const newUser = {
                    linkedinId: profile.id,
                    userName: profile.displayName,
                    email: profile.emails[0].value,
                    imageUrl: profile.photos[0].value,
                    password: 'newuser',
                    userToken: randomstring.generate()
                }
                try {
                    //find the user in our database
                    let user = await User.findOne({email: profile.emails[0].value})
                    //If user present in database
                    if (user) {
                        if (user.linkedinId === '' || user.imageUrl === null) {
                            await User.findOneAndUpdate({email: profile.emails[0].value},
                                {linkedinId: profile.id,imageUrl: profile.photos[0].value})
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
    );

    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
        done(null, user)
    })

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        done(null, id)
        // User.findById(id, (err, user) => done(err, user))
    });
}