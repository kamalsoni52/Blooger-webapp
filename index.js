const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const staticUrls = require("./routes/static")
const userUrls = require("./routes/user")
const app = express();
const PORT = 8000; 
mongoose.connect("mongodb://127.0.0.1:27017/bloggers").then(e=>{
    console.log("mongo connected")
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use("/", staticUrls)
app.use("/user", userUrls)

app.listen(PORT,()=>{
    console.log("server Started")
})