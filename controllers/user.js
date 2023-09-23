const User = require("../models/user")

async function handelSignUp(req, res) {
    const { username, email, password } = req.body;
    await User.create({
        username,
        email,
        password
    });
    return res.redirect("/login")
}

async function handleLogin(req, res) {
    try {
        const { email, password } = req.body;
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie("token", token).redirect("/")
    }
    catch (error) {
        return res.render("login", {
            error: "Incorrect Email or Password"
        })
    }
}
function handleLogout(req,res){
    console.log("logout route")
    return res.clearCookie("token").redirect("/")
}
module.exports = {
    handelSignUp,
    handleLogin,
    handleLogout
}