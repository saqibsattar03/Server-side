var multer = require("multer");

// var upload = multer({ dest: 'uploads/', limits: 52428800 })

const upload = multer({
  dest: "tmp/csv"
});


module.exports = upload;
