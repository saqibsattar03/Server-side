const jwt = require("jsonwebtoken");
const secret_key = require('../../../../secret_key')

let checkToken = (req, res, next) => {
    let token = req.headers["authorization"];
    console.log(token)
    token = token.slice(7,token.length);
    if(token)
    {
        jwt.verify(token, secret_key.JWT_SECRET_KEY,(err, decoded)=>{
            if(err)
            {
                res.json({
                    status: false,
                    msg:" token is invalid",
                });
            }
            else
            {
                req.decoded = decoded;
                next();
            }
        });
    }
    else
    {
        res.json({
            status: false,
            msg: 'Token is not provided'
        });
    }
}

module.exports = {
    checkToken: checkToken
};
