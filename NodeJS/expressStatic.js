var express = require("express");
var app =express();

app.use(express.static('public'));

app.get('/',function(request,response) {
	response.send("Hello World");
});


var server = app.listen(8866,function(){
	console.log("listening at http://%s%s",server.address().address,server.address().port);
});

