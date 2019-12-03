var db = require("../models");

module.exports = function(app){
    app.post("/user_reg", function(req, response){
        var newUser = {};
        newUser.email = req.body.username;
        newUser.password = req.body.password;
        newUser.interest = req.body.intro;
        db.User.find({username: newUser.email}).then((res)=>{
            if (res.length < 1){
                db.User.create(newUser)
                .then((res)=> {
                    console.log("User creation successful");
                    console.log(res);
                    response.json({
                        status: true,
                        user: newUser,
                        msg: "User creation successful"
                    });
                })
                .catch((err)=>{
                    console.log("error occurred during user creation. See below");
                    console.log(err);
                    response.json({
                        status: false,
                        user: newUser,
                        msg: "User creation failed"
                    });
                });
            }
            else{
                response.json({
                    status: false,
                    user: newUser,
                    msg: "Already existing user"
                });
            }
        })
    });
    app.post("/auth", function(req, response){
        var un = req.body.username;
        var pw = req.body.password;
        if(un && pw){
            db.User.findOne({email: un})
            .then(user => {
                if(!user){
                    response.json({
                        login: false,
                        msg: "User does not exist"
                    });
                }
                else if(pw == user.password){
                    response.json({
                        login: true,
                        user: user,
                        msg: "login successful"
                    });
                }
                else {
                    response.json({
                        login: false,
                        msg: "Username or password is incorrect"
                    });
                }
            });
        }
        else{
            response.json({
                login: false,
                msg: "Please fill in all fields"
            });
        }
    })
}