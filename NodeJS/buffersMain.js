var buf = new Buffer(21);
len = buf.write("Ssimply Easy Learning");

console.log("Octets written: "+len);
console.log(buf.toString("utf8",0,len));
console.log(buf.toJSON());


// copy
// compare
// concat
// slice
//length