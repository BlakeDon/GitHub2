//fs.read(fd,buffer,offset,length,position,callback)

// This method will use file descriptor to read the file, if you want to read file using file name directly then you should use another method available.

// Parameters
// Here is the description of the parameters used:

// fd - This is the file descriptor returned by file fs.open() method.

// buffer - This is the buffer that the data will be written to.

// offset - This is the offset in the buffer to start writing at.

// length - This is an integer specifying the number of bytes to read.

// position - This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.

// callback - This is the callback function which gets the three arguments, (err, bytesRead, buffer).

var fs=require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt','r+',function(err,fd){
	if(err) {
		return console.error(err);
	}
	console.log("File opened succesfully!");
	console.log("Going to read the File");
	fs.read(fd,buf,3,buf.length-3,0,function(err,bytes){
		if(err) {
			console.log(err);
		}
		console.log(bytes+" bytes read");

		if(bytes > 0) {
			console.log(buf.slice(0,bytes).toString());
		}
	});
});