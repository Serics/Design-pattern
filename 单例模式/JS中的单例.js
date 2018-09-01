//使用命名空间
var  MyApp={};
MyApp.namespace=function(name){//
  var parts=name.split('.');
  var current=MyApp;
  for(var i in  parts){
     if(!current[parts[i]]){
        current[parts[i]]={};
     }
     current=current[parts[i]];
  }
}
MyApp.namespace('event');
MyApp.namespace('dom.style');
console.dir(MyApp);
//2.使用闭包封装私有变量
var user=(function(){
   var _name='sven';
   _age=29;

   return {
      getUserInfo:function(){
         return _name+ '-' + _age;
      }
   }
})()
console.log(user);