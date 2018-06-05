
var http = require('http');

var server = http.createServer();

var onRequest = function(req,res){

	switch (req.method){
		case 'GET' :

            console.log("GGG");
            console.log(req.url);
            console.log(req.body);
            console.log(req.params);
            res.end(("asd"));

            break;
        case 'POST' :
            var queryData = "";
            req.on('data', function (data) {
                queryData += data;
            });
            req.on('end', function () {
                res.end(queryData);
            });
			break;
		case 'PUT' :
			res.end('PUT success');
			break;
		case 'DELETE' :
			res.end('DELETE success');
			break;
	}
};

var onError = function(err){
    console.error("There was an error");
    console.error(err);
}

server.on('request', onRequest);
server.on('error', onError);
server.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');


