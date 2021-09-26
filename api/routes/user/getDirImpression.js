const {router} = require('../../../config/expressconfig')
const dirImpression = require('../user/dirImpression')

let postDirectoryImpression = router.post("/directory-impression", async (req, res) => {
    return res.json(await dirImpression.insertData(req.body))
});

let getDirectoryImpression = router.get('/get-directory-impression',async (req,res)=>{
    return res.json(await dirImpression.getUserGroupByData(req.body.userId, req.body.dateFilter))
});

module.exports = {postDirectoryImpression,getDirectoryImpression}