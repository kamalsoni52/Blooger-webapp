const express = require("express");
const path = require("path");
const staticUrls = require("./routes/static")
const app = express();
const PORT = 8000; 

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use("/", staticUrls)

app.listen(PORT,()=>{
    console.log("server Started")
})