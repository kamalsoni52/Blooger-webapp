const User = require("../models/user")
async function handelSignUp(req,res){
    const { username, email, password} = req.body;
    await User.create({
        username,
        email,
        password
    });
    return res.redirect("/login")
}

async function handleLogin(req,res){
    const {email, password} = req.body;
    const user = await User.matchPassword(email, password);
    console.log(user)
    return res.redirect("/")
}

module.exports = {
    handelSignUp,
    handleLogin
}