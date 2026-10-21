const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;

    if(name == "anonymous"){
         req.flash("error" , "user not registered!");

    }else{
        req.flash("success" , "user registered successfully!");
    }
    

    res.redirect("/hello");
});

router.get("/hello", (req, res) => {
    
    res.render("page", {
        name: req.session.name,
        msg:req.flash("success")
    });
});

module.exports = router;


