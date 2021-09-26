const {router} = require('../../../config/expressconfig')
const Profession = require('../../models/profession')
const Question = require('../../../dummyData/dummyQuestionAnswer')

let postProfession = router.post("/create-profession", async (req, res) => {
    await Profession.deleteMany();
    const profession = await Profession.create(Question)
        .then((result) => {
            console.log(result);
        })
        .catch((e) => {
            console.log(e);
        });
    res.status(200).json({
        message: "Profession created successfully",
        data: profession,
    });
});

module.exports = postProfession
