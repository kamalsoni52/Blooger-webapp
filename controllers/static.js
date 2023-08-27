const Blogs= require("../models/blog");

async function handleHomePage(req,res){
    const allBlogs = await Blogs.find({}).populate("createdBy");
    res.render("home",{
        user: req.user,
        blogs: allBlogs,
    });
}
function handleSignupPage(req,res){

    res.render("signup")
}
function handleLoginPage(req,res){

    res.render("login")
}
async function handleBlogArticle(req,res){
    const blog = await Blogs.findById(req.params.id).populate("createdBy")
    return res.render("blog",{
        user: req.user,
        blog,
    })

}


module.exports ={
    handleHomePage,
    handleSignupPage,
    handleLoginPage,
    handleBlogArticle
    
}