var express = require('express');

var app = express();

app.get('/',function(req2,res1) {
	res.send("Hello you~~~");

});

app.get('/hahatest',function(request,response){
	response.send("now test succeed");
});

app.get('/json',function(request,response){
	response.json({ json1: 'h', json2: 'e'});
});

app.get('/send/json',function(request,response){
	response.send({json1:'j',json2:'s',json3:'o'});
});

var server = app.listen(8877,function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s",host,port);
});