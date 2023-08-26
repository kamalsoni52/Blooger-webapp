const {Router} = require("express");
const { handelSignUp, handleLogin, handleLogout } = require("../controllers/user");


const router = Router();

router.post("/signup", handelSignUp);
router.post("/login", handleLogin);
router.get("/logout", handleLogout);
module.exports = router