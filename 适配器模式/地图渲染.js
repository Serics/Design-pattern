var googleMap={
  show:function(){
    console.log('开始渲染谷歌地图');
  }
};
var baiduMap={
   show:function(){
     console.log('开始渲染百度地图')
   }
};
var renderMap=function(map){
    if(map.show instanceof Function){//确保show这个属性在map中是个方法
        map.show();
    }
};
renderMap(googleMap);//输出:开始渲染谷歌地图
renderMap(baiduMap);//输出:开始渲染百度地图
/*这段代码得以实现的原因是googleMap和baiduMap都提供了一样的show方法.但是第三方的接口方法并不是
在我们的控制范围之内,假如baiduMap提供的地图显示的方法不再叫show了,而是叫做display了,我们就没法
再继续向render中传入baiduMap了,因为render中的方法要求map实现show方法,从而调用map.show();*/
var googleMap1={
  show:function(){
    console.log('开始渲染谷歌地图');
  }
};
var baiduMap1={
  display:function(){//baiduMap这时候的渲染方法不是show而是display了
    console.log('开始渲染百度地图');
  }
}
//使用一个适配器去包装baiduMap.display
var baiduMapAdapter={
   show:function(){
      return baiduMap1.display();
   }
};
renderMap(googleMap1);//输出:开始渲染谷歌地图
renderMap(baiduMapAdapter);//输出:开始渲染百度地图

