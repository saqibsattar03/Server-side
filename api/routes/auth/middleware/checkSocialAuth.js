module.exports = {
    ensureAuth: (req,res,next)=>{
        if(req.isAuthenticated()){
            console.log(req.isAuthenticated())
            return next()
        }
        else {
            res.redirect('/')
        }
    },
    ensureGuest: (req,res,next)=>{
        if(req.isAuthenticated()){
            res.redirect('demo',{layout: false})
        }
        else {
            return next()
        }
    }
}