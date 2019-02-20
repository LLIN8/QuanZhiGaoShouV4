var mongoose = require("mongoose");

var backgroundSchema = new mongoose.Schema({
    image: String
});

module.exports = mongoose.model("background", backgroundSchema)