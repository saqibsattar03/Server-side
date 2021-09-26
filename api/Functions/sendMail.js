const nodeMailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars");
const logger = require('../../config/logger')

let sendMailForEmailVerification = (recipient, userName, verificationLink) => {
    console.log(verificationLink, userName);
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'bhamnai04@gmail.com',
            pass: 'mgmmamnbmn'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }

    });
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
    let options = {
        viewEngine: {
            extname: '.handlebars',
            layoutsDir: 'views/',
            defaultLayout: 'userVerification',
        },
        viewPath: 'views/'
    };
    transporter.use('compile', hbs(options));

    let mailOptions = {
        from: 'bhamnai04@gmail.com',
        to: recipient,
        subject: 'Welcome to TradingSeek...',
        template: 'userVerification',
        context: {
            userName,
            verificationLink
        }
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            logger.info(`Error: ${err}`)
            console.log(err);
        } else {
            logger.info(`Verification Email Sent to ${info.response}`);
            console.log(`Verification Email Sent to ${info.response}`);
        }
    });
};
let sendMailForPasswordChange = (recipient, userEmail, updatePasswordLink) => {

    var transporter = nodeMailer.createTransport({
        pool: true,
        service: 'gmail',
        type: "SMTP",
        host: "smtp.gmail.com",
        // host: "smtp.example.com",
        // port: 465,
        // secure: true, // use TLS
        auth: {
            user: 'ranasaqib734@gmail.com',
            pass: 'humtydumty123'
        }
    });

    var options = {
        viewEngine: {
            extname: '.handlebars',
            layoutsDir: 'views/',
            defaultLayout: 'updatePassword',
        },
        viewPath: 'views/'
    }

    transporter.use('compile', hbs(options));

    var mailOptions = {
        from: 'ranasaqib734@gmail.com',
        to: recipient,
        subject: 'Reset password instructions...',
        template: 'updatePassword',
        context: {
            userEmail,
            updatePasswordLink
        }
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
let sendMailForNewUserPasswordChange = (recipient, userEmail, userName, updatePasswordLink) => {

    var transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'bhamnai04@gmail.com',
            pass: 'mgmmamnbmn'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
    var options = {
        viewEngine: {
            extname: '.handlebars',
            layoutsDir: 'views/',
            defaultLayout: 'updateNewUserPassword',
        },
        viewPath: 'views/'
    }

    transporter.use('compile', hbs(options));

    var mailOptions = {
        from: 'bhamnai04@gmail.com',
        to: recipient,
        subject: 'You are now a part of tradingseek, a welcome call is on its way!...',
        template: 'updateNewUserPassword',
        context: {
            userEmail,
            userName,
            updatePasswordLink
        }
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

let sendMailForLogin = (recipient, userEmail, loginLink) => {

    var transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'bhamnai04@gmail.com',
            pass: 'mgmmamnbmn'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    var options = {
        viewEngine: {
            extname: '.handlebars',
            layoutsDir: 'views/',
            defaultLayout: 'loginUser',
        },
        viewPath: 'views/'
    }

    transporter.use('compile', hbs(options));

    var mailOptions = {
        from: 'bhamnai04@gmail.com',
        to: recipient,
        subject: 'You are now a part of tradingseek, a welcome call is on its way!...',
        template: 'loginUser',
        context: {
            userEmail,
            loginLink
        }
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


module.exports = {
    sendMailForEmailVerification,
    sendMailForPasswordChange,
    sendMailForNewUserPasswordChange,
    sendMailForLogin
}
