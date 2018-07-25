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

// 7/15/18

newData = ObjectId()

ObjectID.valueof()

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect(process.env.mongodb);

// function insertData(myObject) {
//     db.names.insert(myObject)
// }

// function getDataBack() {
//     var cursor = db.names.find();
//     while (cursor.hasNext()) {
//         printjson(cursor.next());
//     }
// }

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

const schema = require("./schema.js")

var Data = mongoose.model('data', schema);

var silence = new Data({ name: 'Silence' });
console.log(silence.name); // 'Silence'

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
dataSchema.methods.speak = function () {
    var input = this.name
        ? "blank" + this.name
        : "add stuff here";
    console.log(input);
}

var Data = mongoose.model('Data', dataSchema);

var datastuff = new Data({ name: 'stuff' });
datastuff.speak(); // "blank add stuff here stuff"

datastuff.save(function (err, datastuff) {
    if (err) return console.error(err);
    datastuff.speak();
});

Data.find(function (err, data) {
    if (err) return console.error(err);
    console.log(data);
})

Data.find({ name: /^data/ }, callback);
