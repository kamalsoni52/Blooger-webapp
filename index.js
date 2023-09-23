const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser =  require("cookie-parser")
const staticRoutes = require("./routes/static")
const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blog")
const { checkForAuthentication, restrictToBlogTask } = require("./middleware/auth");
const app = express();
const PORT = 8000; 

mongoose.connect("mongodb://127.0.0.1:27017/bloggers").then(()=>{
    console.log("mongo connected")

})

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthentication("token"));
app.use(express.static(path.resolve("./public")))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use("/", staticRoutes)
app.use("/user", userRoutes)
app.use("/blog" ,blogRoutes)

app.listen(PORT,()=>{
    console.log("server Started")
})