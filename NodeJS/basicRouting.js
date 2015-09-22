var express = require("express");

var app = express();

app.get("/",function(request,response) {
	console.log("Got a GET request for the homepage");
	response.send("Hello, you just used a GET call");
});

app.post("/",function(request,response) {
	console.log("Got POST call");
	response.send("Hello, now you make a POST");
});

app.get("/ab*cd", function(request,response){
	console.log("GET for /ab*cd");
	response.send("Pttern Matched");
})

var server = app.listen(8866,function() {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s",host,port)
})

