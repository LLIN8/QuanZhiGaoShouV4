//set up require files
var express                 = require("express"),
    mongoose                = require("mongoose"),
    bodyParser              = require("body-parser"),
    passport                = require("passport"),
    localStrategy           = require("passport-local"),
    Allteam                 = require("./models/allTeam"),
    seedDB                  = require("./seed"),
    User                    = require("./models/user"),
    teamInfo                = require("./models/teamInfo.js"),
    passportLocalMongoose   = require("passport-local-mongoose");
    
//create a dummy DB
seedDB();
    
//set up app
var app = express();

//mongoose connect
mongoose.connect("mongodb://localhost:27017/QuanZhiGaoShouV4", {useNewUrlParser: true});

//set up view and use
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//passport
app.use(require("express-session")({
    secret:"corgi",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});



//Home Routes
app.get("/", function(req,res){
    res.render("home");
});

//team Routes
app.get("/team", function(req, res){
    //Get all team from DB
    Allteam.find({},function(err,allTeams){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("team/team",{allTeams:allTeams});
        }
    });
});

//addTeam routes
app.get("/addTeam", isLoggedIn, function(req,res){
    res.render("team/addTeam");
})

//CREATE - add new campground to DB
app.post("/addTeam", function(req, res){
    // get data from form and add to allTeam
    var name = req.body.teamName;
    var image = req.body.teamImage;
    var newTeam = {teamName: name, teamImage: image}
    // Create a new team and save to DB
    Allteam.create(newTeam, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/team");
        }
    });
});

//addTeamMember routes
app.get("/team/:id/teamMember/addTeamMember", function(req, res) {
    Allteam.findById(req.params.id, function(err, team){
        if(err)
        {
            res.redirect("teamMember/teamMember");
        } else{
            res.render("teamMember/addTeamMember", {team:team});
        }
    });
});
//CREATE - add new campground to DB
app.post("/team/:id/teamMember", function(req, res){
    // get data from form and add to allTeam
    var name = req.body.memberName;
    var image = req.body.memberImage;
    var gender = req.body.gender;
    var birthday = req.body.birthday;
    var bloodtype = req.body.bloodtype;
    var height = req.body.height;
    var APM = req.body.APM;
    var character = req.body.character;
    var weapon = req.body.weapon;
    var description = req.body.descriptions;
    var newMember = {
                teamMember: name,
                memberImage: image,
                gender: gender,
                birthday: birthday,
                bloodtype:bloodtype,
                height:height,
                APM:APM,
                character: character,
                weapon: weapon,
                description: description
                
    };
    // Create a new team member and save to DB

    Allteam.findById(req.params.id, function(err, currentTeam){
        if(err){
            console.log(err);
            res.redirect("teamMember/teamMember");
        }else{
            teamInfo.create(newMember, function(err, newCreated){
                if(err){
                    console.log(err);
                }else{
                    currentTeam.teamInformation.push(newCreated);
                    currentTeam.save();
                    res.redirect("/team/" + currentTeam._id);
                }
            });
        }
    });

});


//load up the register page
app.get("/register", function(req, res) {
    res.render("register");
});

//create new account
app.post("/register", function(req,res){

    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/team")
        });
    });
});
//login routes
app.get("/login", function(req,res){
    res.render("login");
})

//Check for correct credential
app.post("/login", passport.authenticate("local", {
    successRedirect: "/team",
    failureRedirect: "/register"}), function(req,res){
    
});

app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/");
});

//SHOW ROUTE
app.get("/team/:id", function(req, res) {
  Allteam.findById(req.params.id).populate("teamInformation").exec(function(err, teaminfo){
        if(err)
        {
            res.redirect("/team");
        } else{
            res.render("teamMember/teamMember", {teaminfo:teaminfo});
        }
    });
});

function isLoggedIn(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}




//listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Connected");
})