console.log(__filename);
console.log(__dirname);

function printHello() {
	console.log("hello world");
}

var t = setTimeout(printHello,2000);

//clearTimeout(t);