const stripe = require('stripe')(process.env.STRIPE_SK)

module.exports = stripe