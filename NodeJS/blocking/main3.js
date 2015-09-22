var events = require('events');
var eventEmitter =new events.EventEmitter();

var connectHandler = function connected() {
	console.log('connection succesfull.');
	eventEmitter.emit('data_received');
	console.log('connection handler end.');
}

eventEmitter.on('conncetion',connectHandler);

eventEmitter.on('data_received',function() {
	console.log('data received succesfully.');
	console.log('data handler end.');
});

eventEmitter.emit('conncetion');

console.log("program Ended");