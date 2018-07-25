//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var passport = require('passport');
var exphbs = require("express-handlebars");
var session = require('express-session');
var logger = require("morgan")
var mongojs = require("mongojs");


var PORT = process.env.PORT || 8080;

//initialization
var app = express();

app.use(logger("dev"));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);


//app.use(express.static("public"));

//Mongojs configuration
//var databaseUrl = "warmup";
//var collections = ["books"];

//Hook our mongojs config to the db var
//var db = mongojs(databaseUrl, collections);
//db.on("error", function(error){
   // console.log("Database Error:", error);
//});

//Routes

//app.post("./bin/www", function (req, res){
    //save the request body as an object called book
    //var book = req.body; 

// boolean value of false (have to have it otherwise ajax with mess it up) 
    //book.read = false;

    //save the book object as an entry into the books collection in mongo
    //db.books.save(book, function(error, saved) {

        //show any errors
       // if(errors) {
            //console.log(error);
       // }
       // else{
            //otherwise, send the response to the client
           // res.send(saved);
  //  }
//});
//});

//Find 





//static content(public folder)
app.use(express.static(path.join(__dirname, '/public')));

//models for syncing
var db = require("./models");

//parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//auth
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());

app.use(passport.session());


//routing
var apiRoutes = require("./controllers/api-routes");
var htmlRoutes = require("./controllers/html-routes");
var authRoutes = require("./controllers/auth-routes")(app, passport);
app.use("/", apiRoutes);
app.use("/", htmlRoutes);
// app.use("/", authRoutes);

//views
var hbs = exphbs.create({defaultLayout: 'main' });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//load passport strategies
require("./config/passport.js")(passport, db.Customer);



//listener
db.sequelize.sync({}).then(function() {
app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT);
});
});

// Listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });
  