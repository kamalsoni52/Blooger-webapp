function handleHomePage(req,res){
    res.render("home",{
        user: req.user,
    });
}
function handleSignupPage(req,res){

    res.render("signup")
}
function handleLoginPage(req,res){

    res.render("login")
}

module.exports ={
    handleHomePage,
    handleSignupPage,
    handleLoginPage
}