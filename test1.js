function Animal(){
    this.name = 'Animal';
    console.log('Animal init..');
}
function Dog(){
    this.name='Dog';
}
Animal.prototype.say=function(){
    console.log(this.name)
}
function Cat (){
    this.name='Cat';
}
Cat.prototype.__proto__=Animal.prototype;
var cat = new Cat()
cat.say();

Dog.prototype= new Animal;
var dog = new Dog()
dog.say();

Date.prototype.__defineGetter__('ago',function(){
    var diff = ((new Date()).getTime() - this.getTime())/1000;
    var day_diff = Math.floor(diff/(24*60*60));
    console.log(this)
    return diff;
});

var a = new Date('2/18/2017');
console.log(a.ago);
var now = new Date();
setTimeout(function(){
    console.log(Date.now()-now);
    for(var i=0 ;i <1000000000;i++);
},1000);
setTimeout(function(){
    console.log(Date.now()-now);
},2000);

var buff= new Buffer('==iilj2i3hli23h','base64');
console.log(buff);
var fs = require('fs');
fs.writeFile('logo.png',buff,function(e){
    console.log(e)
});
