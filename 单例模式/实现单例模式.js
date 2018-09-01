// var Singleton=function(name){
//    this.name=name;
//    this.instance=null;
// };
// Singleton.prototype.getName=function(){
//   console.log(this.name);
// };
// Singleton.getInstance=function(name){
//   if(!this.instance){
//     this.instance=new Singleton(name);
//   }
//   return this.instance;
// };
// var a=Singleton.getInstance('seven1');
// var b=Singleton.getInstance('seven2');
// console.log(a===b);//true
var Singleton=function(name){
  this.name=name;
};
Singleton.prototype.getName=function(){
  console.log(this.name);
};
Singleton.getInstance=(function(){
   var instance=null;
   return function(name){
     if(!instance){
       instance=new Singleton(name);
     }
     return instance;
   }
})()
var a=Singleton.getInstance('seven1');
var b=Singleton.getInstance('seven2');
console.log(a===b);
