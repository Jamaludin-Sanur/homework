// Setup express
const express = require('express');
var app = express();

// Setup middleware
const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Setup view engine 
app.set('views', __dirname+'/view');
app.set('view engine', 'ejs');

// Setup route
var homeRouter = require('./route/HomeRouter.js');
var aboutRouter = require('./route/AboutRouter.js');
app.use('/home', homeRouter);
app.use('/about', aboutRouter);


// Start server
app.listen(8129);