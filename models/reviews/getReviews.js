 const {router} = require("../../config/expressconfig");
const {sql} = require("../../config/dbConfig");
const {knex} = require('../../knex/knex')


//THIS API RETURNS USERS ON THE BASIS OF STATUS(IT MAY BE ACTIVE, PENDING AND DISABLED)
let getReviews = router.get("/get-reviews-by-businessUserId/:businessUserId", (req, res) => {
    let {businessUserId} = req.params;
    // console.log(status)
    sql.selectReviewsByBusinessUserid('reviews', businessUserId, (result) => {
        if (result && result.length != 0) {
            sql.selectAverageRating(businessUserId, (resultt) => {
                return res.json({message: "REVIEWS FOUND", responseCode: 200, reviews: result, average: resultt})
            })
        } else {
            return res.json({message: "REVIEWS NOT FOUND", responseCode: 404, reviews: result})
        }
    })
});


let getReviewsByBusinessCategory = router.get("/get-reviews-by-business-category/:businessCategory", (req, res) => {
    let {businessCategory} = req.params;
    // console.log(status)
    sql.selectAverageRatingByBusinessCategory(businessCategory, (result) => {
        return res.json({message: "REVIEWS FOUND", responseCode: 200, result})
    })
});


let getNotRatedBusinessByCategory = router.get("/get-not-rated-business-by-category/:userId/:businessCategory", (req, res) => {
    let {businessCategory, userId} = req.params;
    // console.log(status)
    sql.selectNotRatedReviewByProfession('reviews', businessCategory, (result) => {
        if (result && result.length != 0) {
            result.forEach(async item => {
                await knex('directory_impressions').insert({
                    user_id: item.id,
                    viewed_by: parseInt(userId)
                })
            })
            return res.json({message: "REVIEWS FOUND", responseCode: 200, result})
        } else {
            return res.json({message: "REVIEWS NOT FOUND", responseCode: 200, result})
        }
    })
});


module.exports = {getReviews, getReviewsByBusinessCategory, getNotRatedBusinessByCategory}
