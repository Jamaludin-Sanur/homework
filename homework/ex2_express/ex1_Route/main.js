const express = require('express');
const bodyParser = require('body-parser')

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', function(req, res) {
    console.log( req.query );
    res.send('GET');
});

app.post('/', function(req, res) {
    console.log("post");
    console.log( req.body );
    res.send('POST');
});

app.put('/', function(req, res) {
    res.send('PUT');
});

app.delete('/', function(req, res) {
    res.send('DELETE');
});

app.get('*', function(req, res) {
    res.send('not found baby');
  });

app.listen(3000);