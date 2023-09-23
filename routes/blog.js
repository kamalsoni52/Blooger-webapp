const {Router} = require("express");
const { handelCreateBlog,handleAddBlogPage,handleBlogArticle } = require("../controllers/blog");
const multer = require("multer");
const path= require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/uploads/`))
    },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    }
  })
  
const upload = multer({ storage: storage })

const router = Router();

router.post("/addblog", upload.single("coverImage"), handelCreateBlog).get("/addblog",handleAddBlogPage);
router.get("/:id", handleBlogArticle);

module.exports = router