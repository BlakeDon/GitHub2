var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input2.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk) {
	data+=chunk;
	console.log("now: "+data);
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("Program Ended");