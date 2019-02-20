var mongoose = require("mongoose");

var teamInfoSchema = new mongoose.Schema({
    teamMember: String,
    memberImage: String,
    gender: String,
    birthday:String,
    age:String,
    character:String,
    weapon:String,
    sign:String,
    height:String,
    memberDescription: String
});

module.exports = mongoose.model("teamInfo", teamInfoSchema)