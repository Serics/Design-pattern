//有些客人可能并不需要加调料,所以我们可以利用钩子方法
var Beverage = function () {};
Beverage.prototype.boilWater = function () {
  console.log('把水煮沸');
}
Beverage.prototype.brew = function () {
  throw new Error('子类必须重写brew方法') //保证子类必须重写父类方法
}; //空方法应该由子类重写
Beverage.prototype.pourInCup = function () {
  throw new Error('子类必须重写pourInCup方法') //保证子类必须重写父类方法
}; //空方法应该由子类重写
Beverage.prototype.addCondients = function () {
  throw new Error('子类必须重写addCondients方法') //保证子类必须重写父类方法
}; //空方法应用由子类重写
  //钩子方法
Beverage.prototype.customerWantsCondients=function(){
   return true;//默认需要调料
}
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  if(this.customerWantsCondients()){
    this.addCondients();
  }
}

//创建Coffee子类
var Coffee = function () {};
Coffee.prototype = new Beverage();
Coffee.prototype.brew = function () {
  console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondients = function () {
  console.log('加糖和牛奶');
}
//钩子方法
Coffee.prototype.customerWantsCondients=function(){
  return window.confirm('请问需要调料吗');
}
var coffee = new Coffee();
coffee.init();
