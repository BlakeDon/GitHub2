var fs = require("fs");
console.log("Going to wirte into existing file");
fs.writeFile('input.txt', "Simpley Easy Learning", function(err) {
	if(err) {
		console.error(err);
	}
	console.log("data written successfully!");
	console.log("Let's read newly written data");
	fs.readFile('input.txt',function(err,data){
		if(err) {
			return console.error(err);
		}
		console.log("Asynchronous read: "+ data.toString());
	});
});