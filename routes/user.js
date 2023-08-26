const {Router} = require("express");
const { handelSignUp, handleLogin } = require("../controllers/user");


const router = Router();

router.post("/signup", handelSignUp);
router.post("/login", handleLogin);

module.exports = router