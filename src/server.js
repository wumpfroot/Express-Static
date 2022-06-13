const express = require("express");
const app = express();

app.use("/static", express.static("public"));
//added a /static url path to my web server (app), when hit it will run our public folder

app.listen(5000, () => {
    console.log("Listening on port 5000")
})