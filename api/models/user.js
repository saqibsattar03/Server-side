const mongoose = require('mongoose')
let {now} = require("moment");
const bcrypt = require('bcrypt');
const ReviewSchema = require('./review')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    imageUrl: {
        type: String,
        default: null
    },
    password: {
        type: String,
        required:[true,"Please enter valid password"]
    },
    mobile: {
        type: String
    },
    isVerified: {
        type: String,
        default: ''
    },
    businessName: {
        type: String
    },
    businessABN: {
        type: String
    },
    businessProfession: {
        type: String
    },
    location: {
        type: String
    },
    userType: {
        type: String,
        default: 'Normal User'
    },
    registrationDate: {
        type: Date,
        default: Date.now

    },
    userToken: {
        type: String
    },
    profession: {
        type: String
    },
    provider: {
        type: String
    },
    facebookId: {
        type: String,
        default: ''
    },
    googleId: {
        type: String,
        default: ''
    },
    linkedinId: {
        type: String,
        default: ''
    },
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    services: [
        {
            type: String
        }
    ],
    status: {
        type: String
    },
    description: {
        type: String
    },
    landline: {
        type: String
    },
    website: {
        type: String
    },
    businessEmail: {
        type: String
    },
    token:{
        type: String
    }

});

userSchema.pre('save', function (next) {
    now = new Date();
    if (!this.registrationDate) {
        this.registrationDate = now

    }
    next()
});


userSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (error, hash) {
        if (error) {
             return next(error)
        } else {
            user.password = hash;
            next()
        }
    })
});



const model = mongoose.model('User', userSchema)
module.exports = model