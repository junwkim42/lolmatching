const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  leagueID: { type: String, required: true },
  interest: { type: String},
  mainLane: {type: String},
});

const User = mongoose.model("User", userSchema);

module.exports = User;