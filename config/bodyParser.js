const bodyParse = (app, express) => {
    app
        .use(
            express.json({
                // We need the raw body to verify webhook signatures.
                // Let's compute it only when hitting the Stripe webhook endpoint.
                verify: function (req, res, buf) {
                    if (req.originalUrl.startsWith('/webhook')) {
                        req.rawBody = buf.toString()
                    }
                }
            })
        )
        .use(
            express.urlencoded({
                extended: false // limit: 52428800,
                // parameterLimit: 5000
            })
        )
}

module.exports = {
    bodyParse
}