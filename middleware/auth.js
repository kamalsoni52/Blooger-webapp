const { validateToken } = require("../services/auth");

function checkForAuthentication(cookieName){
    return function(req,res,next){
        const tokenValue = req.cookies[cookieName]
        if(!tokenValue) return next();

        try{
            const userPayload = validateToken(tokenValue)
            req.user = userPayload;
        }
        catch (error){
            console.log("some error in middleware")
        }
        next();
    }
}

function restrictToBlogTask(){
    return function(req,res,next){
        if(!req.user){
            return res.redirect("/login")
            next();
        }
        next();
    }
}
module.exports={
    checkForAuthentication,
    restrictToBlogTask
}