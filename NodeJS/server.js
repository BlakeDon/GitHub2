var net = require("net");
var server = net.createServer(function(connection){
	console.log("client connected");
	connection.on('end',function(){
		console.log("client disconnected");
		return;
	});
	connection.write("hello world!\r\n");
	connection.pipe(connection);
});

server.listen(8764,function() {
	console.log("server is listening");
});

console.log("Program Ended");