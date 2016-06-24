//server.js ---> SERVER!
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// calling express in app variable.
var app = express();
var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || 'myMasterKey'
});

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';

/**********
SERVER
***********/
mongoose.connect('mongodb://127.0.0.1:27017/test');
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
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
