//server.js ---> SERVER!
var express = require('express');
var bodyParser = require('body-parser');


// calling express in app variable.
var app = express();


/**********
SERVER
***********/

// serve static files in public
app.use(express.static(__dirname + '/public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/vendor', express.static(__dirname + '/bower_components'));
var controllers = require('./controllers');
var db = require('./models');

console.log("SERVER JS RUNNING, yay.");

/**********
ROUTES
***********/


//HTML endpoints********
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
//JSON API Endpoints*************

// routes



/**********
SERVER
***********/

//listening on port 3000
app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening at http://localhost:8000/');
});
