var mongoose = require("mongoose");

var allTeamSchema = new mongoose.Schema({
    teamName: String,
    teamImage: String,
    teamInformation: 
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "teamInfo"
        }
    ]
});

module.exports = mongoose.model("allTeams", allTeamSchema);