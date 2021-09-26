require('dotenv').config()

const express = require('express')
let cors = require('cors')
const mongoose = require("mongoose")
const logger = require('./logger')
const morgan = require('morgan')
const passport = require('passport')
const {Strategy} = require('passport-google-oauth20')
const session = require('cookie-session')
require('../api/routes/auth/socialAuth/google')(passport)
require('../api/routes/auth/socialAuth/linkedIn')(passport)
require('../api/routes/auth/socialAuth/facebook')(passport)

module.exports = {
    router: express.Router(),
    app: () => {
        const mongoConnectionString = 'mongodb://localhost:27017/tradingseek';
        mongoose.connect(mongoConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        mongoose.connection.on("error", err => {
            console.log("err", err)
        })
        mongoose.connection.on("connected", (err, res) => {
            console.log("mongoose is connected")
        })
        const app = express()
        require('./bodyParser').bodyParse(app, express)

        const port = process.env.PORT || 4000

        // Sessions
        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: false
        }))

        //Passport

        app.use(passport.initialize())
        app.use(passport.session())


        // middleware to avoid CORS ....
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Headers', '*')
            res.header('Access-Control-Allow-Credentials', true)
            res.header('Access-Control-Allow-Methods', '*')
            // app.use(cors())
            next()
        })

        app.listen(port, e => {
            e
                ? console.log('Server Cannot Start', e)
                : console.log('Server Started', port)
        })


        return app
    }
}
