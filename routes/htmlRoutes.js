var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/login", function(req, res){
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });
    app.get("/profile", function(req, res){
        res.sendFile(path.join(__dirname, "../public/profile.html"));
    });
};