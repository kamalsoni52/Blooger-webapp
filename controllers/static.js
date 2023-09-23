const Blogs = require("../models/blog");

async function handleHomePage(req, res) {
    try {
        const allBlogs = await Blogs.find({}).populate("createdBy");
        return res.render("home", {
            user: req.user,
            blogs: allBlogs,
        });
    }
    catch (error){
        console.log("error",error)
    }
}
function handleSignupPage(req, res) {

    return res.render("signup")
}
function handleLoginPage(req, res) {

    return res.render("login")
}






module.exports = {
    handleHomePage,
    handleSignupPage,
    handleLoginPage,
    

}