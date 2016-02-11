//--------------------------------------------------------------------------
//
//Conceptor App Server
//
//--------------------------------------------------------------------------

//Requires------------------------------------------------------------------
var express = require('express');
var app = express();

//MongoDB
var MongoClient = require('mongodb').MongoClient;

//--------------------------------------------------------------------------

//Requests------------------------------------------------------------------

 app.get("/", function(req, res) {
     res.sendFile(__dirname + '/public/views/index.html');
 });

 /* serves all the static files */

 app.use("/public", express.static( __dirname + '/public'));

 //--------------------------------------------------------------------------

 //Initialize Server---------------------------------------------------------

 var port = process.env.PORT || 8000;
 var server = app.listen(port, function() {
     console.log("Listening on " + port);
 });

 var io = require('socket.io')(server);

 //--------------------------------------------------------------------------