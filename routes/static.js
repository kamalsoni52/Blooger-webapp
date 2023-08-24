const {Router} = require("express");
const { handleHomePage } = require("../controllers/static");

const router = Router();

router.get("/", handleHomePage)

module.exports = router