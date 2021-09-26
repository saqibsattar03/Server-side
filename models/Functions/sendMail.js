var nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars");

let sendMailForJobVerification = (recipitant, categoryName) => {

  var transporter = nodemailer.createTransport({
    pool: true,
    service: 'gmail',
    // host: "smtp.example.com",
    // port: 465,
    // secure: true, // use TLS
    // auth: {
    //   userSelection: process.env.TEAM_EMAIL,
    //   pass: process.env.TEAM_PASSWORD
    // }
    auth: {
      user: "bilalqmr41@gmail.com",
      pass: "BILAL12345"
    }
  });

  var options = {
    viewEngine: {
      extname: '.handlebars',
      layoutsDir: 'views/',
      defaultLayout: 'postJob',
    },
    viewPath: 'views/'
  }

  transporter.use('compile', hbs(options));


  console.log(__dirname)

  var mailOptions = {
    from: 'bilalqmr41@gmail.com',
    to: recipitant,
    subject: 'Your ' + categoryName + ' expert is a few clicks away...',
    template: 'postJob',
    context: {
      categoryName
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


let sendMailForEmailVerification = (recipitant, userName, verificationLink) => {

  var transporter = nodemailer.createTransport({
    pool: true,
    service: 'gmail',
    // host: "smtp.example.com",
    // port: 465,
    // secure: true, // use TLS
    auth: {
      user: "bilalqmr41@gmail.com",
      pass: "BILAL12345"
    }
  });

  var options = {
    viewEngine: {
      extname: '.handlebars',
      layoutsDir: 'views/',
      defaultLayout: 'userVerification',
    },
    viewPath: 'views/'
  }

  transporter.use('compile', hbs(options));

  var mailOptions = {
    from: 'bilalqmr41@gmail.com',
    to: recipitant,
    subject: 'Welcome to TradingSeek...',
    template: 'userVerification',
    context: {
      userName,
      verificationLink
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


let sendMailForPasswordChange = (recipitant, userEmail, updatePasswordLink) => {

  var transporter = nodemailer.createTransport({
    pool: true,
    service: 'gmail',
    type: "SMTP",
    host: "smtp.gmail.com",
    // host: "smtp.example.com",
    // port: 465,
    // secure: true, // use TLS
    auth: {
      user: "bilalqmr41@gmail.com",
      pass: "BILAL12345"
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
    from: 'bilalqmr41@gmail.com',
    to: recipitant,
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


let sendMailForNewUserPasswordChange = (recipitant, userEmail, userName, updatePasswordLink) => {

  var transporter = nodemailer.createTransport({
    pool: true,
    service: 'gmail',
    type: "SMTP",
    host: "smtp.gmail.com",
    // host: "smtp.example.com",
    // port: 465,
    // secure: true, // use TLS
    auth: {
      user: "bilalqmr41@gmail.com",
      pass: "BILAL12345"
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
    from: 'bilalqmr41@gmail.com',
    to: recipitant,
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




let sendMailForLogin = (recipitant, userEmail, loginLink) => {

  var transporter = nodemailer.createTransport({
    pool: true,
    service: 'gmail',
    type: "SMTP",
    host: "smtp.gmail.com",
    // host: "smtp.example.com",
    // port: 465,
    // secure: true, // use TLS
    auth: {
      user: "bilalqmr41@gmail.com",
      pass: "BILAL12345"
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
    from: 'bilalqmr41@gmail.com',
    to: recipitant,
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
  sendMailForJobVerification,
  sendMailForEmailVerification,
  sendMailForPasswordChange,
  sendMailForNewUserPasswordChange,
  sendMailForLogin
};

