const {router} = require("../../config/expressconfig");
const {sql} = require("../../config/dbConfig");
const {url} = require("../../config/serverRootUrl");
const {knex} = require('../../knex/knex')


//THIS API RETURNS USERS ON THE BASIS OF PROFESSION(IT MAY BE CARPENTER, ELECTRICIAN ETC)
let getUsersByProfession = router.get("/get-users-by-profession/:userId/:profession", (req, res) => {
    let {profession, userId} = req.params;
    // console.log(status)
    sql.selectByProfession('user', profession, (result) => {
        if (result && result.length != 0) {
            result.forEach(async item => {
                await knex('directory_impressions').insert({
                    user_id: item.id,
                    viewed_by: parseInt(userId)
                })
            })
            return res.json({message: "USERS FOUND", responseCode: 200, users: result})
        } else {
            return res.json({message: "USERS NOT FOUND", responseCode: 404, user: result})
        }
    })
});


module.exports = {getUsersByProfession}
