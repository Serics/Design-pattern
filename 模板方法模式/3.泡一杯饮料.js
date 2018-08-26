/*泡一杯饮料:
(1)把水煮沸
(2)用沸水冲泡饮料
(3)把饮料倒进杯子
(4)加调料
*/
var Beverage=function(){};
Beverage.prototype.boilWater=function(){
  console.log('把水煮沸');
}
Beverage.prototype.brew=function(){
  throw new Error('子类必须重写brew方法')//保证子类必须重写父类方法
};//空方法应该由子类重写
Beverage.prototype.pourInCup=function(){
   throw new Error('子类必须重写pourInCup方法') //保证子类必须重写父类方法
};//空方法应该由子类重写
Beverage.prototype.addCondients=function(){
   throw new Error('子类必须重写addCondients方法') //保证子类必须重写父类方法
};//空方法应用由子类重写
Beverage.prototype.init=function(){
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondients();
}
//创建Coffee子类
var Coffee=function(){};
Coffee.prototype=new Beverage();
Coffee.prototype.brew=function(){
  console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup=function(){
  console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondients=function(){
  console.log('加糖和牛奶');
}
var coffee=new Coffee();
coffee.init();
//创建Tea子类
var Tea = function () {};
Tea.prototype = new Beverage();
Tea.prototype.brew = function () {
  console.log('用沸水浸泡茶叶');
}
Tea.prototype.pourInCup=function(){
   console.log('把茶倒进杯子');
}
 Tea.prototype.addCondients = function () {
  console.log('加柠檬');
}
var tea = new Tea();
tea.init();
