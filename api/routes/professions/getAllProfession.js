const { router } = require('../../../config/expressconfig')
const Profession = require('../../models/profession')

const getAllProfession = router.get('/get-all-profession',async (req,res)=>{
    const data =await Profession.find();
    res.json({
        data: data,
        msg: 'All profession successfully retrieved'
    });
    if(!data){
        res.json({
            msg: 'no data found'
        })
    }
})

module.exports = getAllProfession
