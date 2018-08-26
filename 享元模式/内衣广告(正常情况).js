/*
    假设有一个内衣工厂,目前的产品有50种男式内衣和50种女式内衣,为了推销产品,工厂决定生产一些塑料
模特来穿上他们的内衣拍成广告照片.
*/
//正常情况下需要50个男模和50个女模
var Model=function(sex,underwear){
   this.sex=sex;
   this.underwear=underwear;
}
Model.prototype.takePhoto=function(){
  console.log(`sex=${this.sex}underwear=${this.underwear}`);
}
for(var i=1;i<=50;i++){
  var maleModel=new Model('male','underwear'+i);
  maleModel.takePhoto();
}
for(var j=1;j<=50;j++){
  var femaleModel=new Model('female','underwear'+j);
  femaleModel.takePhoto();
}