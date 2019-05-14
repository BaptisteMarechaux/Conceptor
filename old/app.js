//--------------------------------------------------------------------------
//
//Conceptor App Server
//
//--------------------------------------------------------------------------
//A
//Requires------------------------------------------------------------------
var express = require('express');
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

//MongoDB
var MongoClient = require('mongodb').MongoClient;

//--------------------------------------------------------------------------

//Requests------------------------------------------------------------------

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get("/ludos", function(req, res) {
    res.sendFile(__dirname + '/public/views/ludos.html');
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