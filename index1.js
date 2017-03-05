/// <reference path="http" />
setImmediate(function () {
	console.log(4);
})
console.log(1);
process.nextTick(function () {
	console.log(3);
});
console.log(2);
process.nextTick(function () {
	console.log(5)
});
var EventEmitter = require('events').EventEmitter;
// var EventEmitter = process.EventEmitter,
	MyClass = function () { };
MyClass.prototype.__proto__ = EventEmitter.prototype;
var a  = new MyClass();
a.on('dosome',function(){
	console.log('do some things.');
})
a.emit('dosome');
var http = require('http');
var server = http.createServer(function(req,res){
	var buf = '';
	req.on('data',function(data){
		buf +=data;
	});
	req.on('end',function(){
		console.log('数据接收完毕'+buf);
	});
});
server.listen(8080);
