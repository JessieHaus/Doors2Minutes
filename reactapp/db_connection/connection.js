var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "doors"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  start()
});


//function so that when 