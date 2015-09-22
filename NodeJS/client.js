var net = require("net");

console.log("trying to connect...");
var client = net.connect({port:8764},function() {
	console.log("connected to server!");
});

client.on("data",function(data) {
	console.log(data.toString());
	client.end();
});

client.on("end",function() {
	console.log("disconnected from server");
});