const {Router} = require("express");
const {
     handleHomePage,
     handleSignupPage, 
     handleLoginPage,
     handleBlogArticle
     
     } = require("../controllers/static");

const router = Router();

router.get("/", handleHomePage)
router.get("/signup", handleSignupPage)
router.get("/login", handleLoginPage)

router.get("/:id", handleBlogArticle);

module.exports = router