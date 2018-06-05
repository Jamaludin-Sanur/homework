var http = require('http');
var fs = require('fs');
var server = http.createServer();


var onRequest = function(req,res){
    switch(req.url) {
        case '/':
            var fileContent = fs.readFileSync("public/home.html");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContent);   
            break;
        case '/about':
            var fileContent = fs.readFileSync("public/about.html");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContent);
            break;
        default :
            res.end("not found for url "+req.url);
            break;
    }   
};

server.on('request', onRequest);

server.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');


