var fs=require("fs");
var buf=new Buffer(1024);

console.log("going");
fs.open("input.txt",'r+',function(err,fd){
	if(err) {
		return console.error(err);
	}
	console.log("open OK");
	console.log("going");
	fs.ftruncate(fd,10,function(err,bytes){
		if(err) {
			console.error(err);
		}

		fs.read(fd,buf,0,buf.length,0,function(err,bytes){
			if(err) {
				console.error(err);
			}
			if(bytes>0) {
				console.log(buf.slice(0,bytes).toString());
			}
			fs.close(fd,function(err) {
				if(err) {
					console.error(err);
				}
				console.log("close OK");
			});
		});
		
	});
});