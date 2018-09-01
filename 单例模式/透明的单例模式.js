var CreateDiv=(function(){
    var instance=null//定一个变量占位
    var CreateDiv=function(html){//定义div构造函数负责创建div节点
      if(instance){//判断单例是否存在
        return instance;//存在则直接返回这个单例,下边代码不执行
      }
      this.html=html;//不存在的话则将传进来的html参数赋值给this.html
      this.init();
    }
    CreateDiv.prototype.init=function(){//负责初始化div并将div插入文档中
       var div=document.createElement('div');
       div.innerHTML=this.html;
       document.body.appendChild(div);
    }
    return CreateDiv;
})();
var a=new CreateDiv('sven1');
var b=new CreateDiv('sven2');
console.log(a===b);