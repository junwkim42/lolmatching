require("dotenv").config();
var express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");


var app = express();
var PORT = process.env.PORT || 3000;
var MongoDB_URI = process.env.MONGODB_URI || "mongodb://user1:root1234@ds017582.mlab.com:17582/heroku_b88k79vb"

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//  app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/authRoutes")(app);


//mongooose
mongoose.connect(MongoDB_URI, { useNewUrlParser: true })
    .then(()=>console.log("MongoDB connected"))
    .catch(err => console.log(err));

//api server
app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
module.exports = app;
