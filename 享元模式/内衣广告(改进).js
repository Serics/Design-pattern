/*
   优化场景:虽然有100种内衣,但是显然并不需要50个男模和50个女模,其实男模和女模各自有一个就够,
分别让他们穿上不同的内衣来拍照就行
*/
var Model=function(sex){
  this.sex=sex
};
Model.prototype.takePhoto=function(){
  console.log(`sex=${this.sex}underwear=${this.underwear}`);
}
//分别创建一个男模和女模
var maleModel=new Model('male');
var femaleModel=new Model('female');
//给男模依次穿上所有的男装,并进行拍照
for(var i=1;i<=50;i++){
  maleModel.underwear='underwear'+i;
  maleModel.takePhoto();
}
//给女模依次穿上所有的女装,并进行拍照
for(var j=1;j<=50;j++){
  femaleModel.underwear='underwear'+j;
  femaleModel.takePhoto();
}
