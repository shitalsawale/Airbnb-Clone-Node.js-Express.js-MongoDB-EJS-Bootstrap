const express = require("express");
const app = express();

const session = require("express-session");
const router = require("./routes.js");

const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next) =>{
    res.locals.errorMsg = req.flash("error");
    res.locals.successMsg = req.flash("success");
    next();
});

app.use("/", router);

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});