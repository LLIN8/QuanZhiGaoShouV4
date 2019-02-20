var mongoose = require("mongoose");

var teamInfoSchema = new mongoose.Schema({
    teamMember: String,
    memberImage: String,
    gender: String,
    birthday:String,
    bloodType:String,
    character:String,
    weapon:String,
    APM:String,
    height:String,
    memberDescription: String
});

module.exports = mongoose.model("teamInfo", teamInfoSchema)