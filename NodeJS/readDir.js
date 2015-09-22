var fs = require("fs");
console.log("going");
fs.readdir("./testdir",function(err,files){
	if(err) {
		return console.error(err);
	}
	files.forEach(function(file) {
		console.log(file);
	});
});