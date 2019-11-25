require("dotenv").config();
var express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");


var app = express();
var PORT = process.env.PORT || 3000;

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


//mongooose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lol", { useNewUrlParser: true })
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
