const Blogs = require("../models/blog")
const User = require("../models/user")

async function handelCreateBlog(req,res){
    try{
        const {title , content} = req.body
        const blog = await Blogs.create({
            title,
            content,
            createdBy: req.user._id,
            coverImageUrl: `/uploads/${req.file.filename}`
        });
        return res.redirect(`/blog/${blog._id}`);
    }
    catch {
        console.log("createblogerror")
    }
   
   

}
function handleAddBlogPage(req,res){
    return res.render("addblog",{
        user: req.user
    })
}
async function handleBlogArticle(req, res) {
    try{
        const blog = await Blogs.findById(req.params.id).populate("createdBy")
        return res.render("blog", {
        user: req.user,
        blog,
    })
    }
    catch{
        console.log("error in blog article")
    }
    

}

module.exports={
    handelCreateBlog,
    handleAddBlogPage,
    handleBlogArticle
    
}