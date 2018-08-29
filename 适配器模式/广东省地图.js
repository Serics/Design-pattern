var getGuangdongCity=function(){//这个函数就一个作用,定义对象数组后返回该数组
   var  guangdongCity=[
       {
         name:'shenzhen',
         id:11
       },{
         name:'guangzhou',
         id:12
       }
   ];
   return guangzhouCity;
};
var render=function(fn){
   console.log('开始渲染广东省地图');
   document.write(JSON.stringify(fn()));
};
// render(getGuangzhouCity);
/*利用这些数据,我们编写完了整个页面,并且在线上稳定地运行了一段时间.但是后来发现这些数据
并不是太可靠,里面还缺少许多城市.于是我们又在网上找到了另外一些数据资源,这次的数据更加的
全面,但是很遗憾,数据结构和正运行的项目中的并不一致.*/
/*
新的数据结构:是一个对象,原来是个数组
 var guangzhouCity={
   shenzhen:11,
   guangzhou:12,
   zhuhai:13
 };
*/
//所以我们准备新增一个数据格式转换器解决这个问题:
var addressAdapter=function(oldAddressfn){
   var address={};//创建一个空的对象
   var oldAddress=oldAddressfn();//创建一个变量,并将传进来的函数执行后返回的对象数组保存在这个变量中
   //将oldArress遍历一遍(其实就是把oldAddressfn方法返回的数组遍历一遍)
   for(var i=0,c;c=oldAddress[i++];){
     //将返回的数组中的每一个元素的id赋值给address[c.name]当做属性值
     //address[c.name]:将返回数组中的每个元素的name作为address对象的属性
       address[c.name]=c.id;
   }
   //需要注意的是这里返回的是一个匿名函数而不是对象address,需要调用它才会返回address
   return function(){
      return address;
   }
};
render (addressAdapter(getGuangzhouCity));
/*总结利用数据格式转换器将数组(每一个元素又是一个对象)转换成对象的步骤:
(1).先创建一个空对象address;
(2)拿到需要转换的数组
(3)遍历需要转换的数组,并将数组中的每一个元素的name加入address对象作为属性,元素的id作为属性值
(4)返回这个转换后的对象
转换前:
var guangdongCity=[{name:'shenzhen',id:11},{name:'guangzhou',id:12}];
转换后:
var guangdongCity={shenzhen:11,guangzhou:12};
*/