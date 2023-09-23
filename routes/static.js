const {Router} = require("express");
const {
     handleHomePage,
     handleSignupPage, 
     handleLoginPage,
     
     
     } = require("../controllers/static");

const router = Router();

router.get("/", handleHomePage)
router.get("/signup", handleSignupPage)
router.get("/login", handleLoginPage)



module.exports = router