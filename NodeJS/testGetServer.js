var express = require("express");
var app = express();

app.use(express.static("public"));

app.get('/index.html', function(request,response){
	response.sendfile(__dirname+"/"+"testGet.html");
});

app.get("/process_get", function(request,response){
	responseJSON = {
		first_name:request.query.first_name,
		last_name:request.query.last_name_haha
	};
	console.log(responseJSON);
	response.end(JSON.stringify(responseJSON));
});

var server =app.listen(8866, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(JSON.stringify(server.address()));
});