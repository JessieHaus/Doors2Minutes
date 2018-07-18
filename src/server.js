                    // THIS IS MONGODB STUFF AD

                    //7/15/18
db = connect('127.0.0.1:27017/mDB') 

    function insertData(myObject){
        db.names.insert(myObject)
    }

    function getDataBack() {
        var cursor = db.names.find();
        while(cursor.hasNext()){
            printjson(cursor.next());
        }
    }
                    //7/15/18
                    
// import { 
//     Stitch,
//     RemoteMongoClient,
//     AnonymousCredential
// } from "mongodb-stitch-browser-sdk";

var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var mongoose = require("mongoose");
var logger = require("morgan");
var cheerio = require("cheerio");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 4000;


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("./public"));

// connect to database
mongoose.Promise = Promise;
var dbConnect = process.env.MONGODB_URI || "mongodb://localhost/mDB";
if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect(dbConnect);
}
                    
                    // 7/15/18
db = connect('127.0.0.1:27017/mDB') 

    function insertData(myObject){
        db.names.insert(myObject)
    }

    function getDataBack() {
        var cursor = db.names.find();
        while(cursor.hasNext()){
            printjson(cursor.next());
        }
    }
                    
import { 
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient('doors_to_minutes-ggkln');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb1').db('<mDB>');

client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
  db.collection('<COLLECTION>').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
).then(() => 
  db.collection('<COLLECTION>').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
// });
                    // THIS IS MONGODB STUFF AD