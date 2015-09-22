// target dir should be empty

var fs= require("fs");

console.log("going");
fs.rmdir("./testdir",function(err) {
	if(err) {
		return console.error(err);
	}
	console.log("going");
	fs.readdir("./",function(err,files) {
		if(err) {
			console.error(err);
		}
		files.forEach(function(file) {
			console.log(file);
		});
	});
});