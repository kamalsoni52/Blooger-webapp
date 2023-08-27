const Blogs = require("../models/blog")
const User = require("../models/user")

async function handelCreateBlog(req,res){
    const {title , content} = req.body
    const blog = await Blogs.create({
        title,
        content,
        createdBy: req.user._id,
        coverImageUrl: `/uploads/${req.file.filename}`
    });
    return res.redirect(`/${blog._id}`);
   

}
function handleAddBlogPage(req,res){
    res.render("addblog",{
        user: req.user
    })
}

module.exports={
    handelCreateBlog,
    handleAddBlogPage,
    
}