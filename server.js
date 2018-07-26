// THIS IS MONGODB STUFF AD
require("dotenv").config()
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var mongoose = require("mongoose");
var logger = require("morgan");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("./public"));


// getting-started.js
var mongoose = require('mongoose');
mongoose.connect(process.env.mongodb, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connected to DB!')
})
mongoose.Promise = Promise;
//new
mongoose.model('data', {String});



app.get('/data', function(req, res){
    mongoose.model('data').find(function(err, data){
        res.send(data);
    })
})


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});




app.get('/data', function(req, res){
    mongoose.model('data').find(function(err, data){
        res.send(data);
    })
})

