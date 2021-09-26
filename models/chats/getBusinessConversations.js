const {router} = require("../../config/expressconfig");
const {sql} = require("../../config/dbConfig");


let getBusinessConversations = router.get("/get-business-conversations/:businessUserEmail", (req, res) => {
    let {businessUserEmail} = req.params;
    // console.log(businessUserEmail)
    sql.selectBusinessuserConversations(businessUserEmail, (result) => {
        if (result && result.length != 0) {
            return res.json({message: "CONVERSATION SUCCESSFULLY FETCH", responseCode: 200, users: result})
        } else {
            return res.json({message: "FAILED TO FETCH CONVERSATION", responseCode: 400, users: result})
        }
    })
});


module.exports = {getBusinessConversations}