/*
命令模式应用场景:
    有时候需要向某些对象发送请求,但是并不知道请求的接收者是谁,也不知道被请求的操作是什么,此时
希望用一种松耦合的方式来设计软件,使得请求发送者和请求接收者能够消除彼此之间的耦合关系.
*/

/*菜单程序
  假设需要我们需要编写一个用户界面程序,该用户界面至少要有数十个button按钮.因为该项目比较复杂,
所以我们决定让某个程序员负责绘制这些按钮,而另外一些程序员负责编写点击按钮后的具体行为,这些行为
都被封装在了对象里头.
*/

/*
 问题分析:
  对于绘制按钮的程序员来说,他完全不知道某个按钮未来会做什么,可能用来刷新菜单界面,可能增加一些子菜单,
他只知道点击这个按钮会发生一些事情,具体什么事情就不知道了,那么他要怎么样绑定onclick事件呢?
*/
/*
 解决方案:
  根据命令模式应用场景描述,我们可以找到运用命令模式的理由:点击按钮之后,必须向某些负责具体行为的对象发送
请求,这些对象就是请求的接收者.它们负责绑定onclick事件后真正要做的事,比如前面所说的刷新菜单界面,增加子菜
单.但是现在绘制按钮的程序员却不知道这些接收者是什么对象,也不知道每个接收者究竟做什么.此时,我们就需要借助
命令对象的帮助,以便解开按钮和负责具体行为的对象的耦合.
*/
/*HTML
<body>
   <button id="button1">按钮1</button>
   <button id="button2">按钮2</button>
   <button id="button3">按钮3</button>
</body>
*/
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
/*
定义setCommand函数,setCommand函数负责往按钮上安装命令.注意,具体的命令现在是不知道的,所以我们就直接
安装一个统一的叫做command的命令对象,这个对象来调用自身的一个execute方法去对按钮发出的请求做具体操作.
虽然说不知道命令代表什么命令,但是绘制按钮的程序员丝毫不用管这些事情,因为他只需要预留安装好命令的接口,
command对象自然知道如何和正确的对象沟通.
*/
var setCommand=function(button,command){
//传两个参数,一个是绑定onclick事件的按钮,一个是命令对象
  button.onclick=function(){
    command.execute()
    /*
     这里我们执行command对象的execute()方法,这就算是一个接口,具体的command对象和execute方法,
     每个不同的command对象会有不同的execute方法的实现.
    */
  }
};
//点击按钮之后需要的具体操作代码,被封装在两个对象里头MenuBar和SubMenu.
var MenuBar={
   refresh:function(){
     console.log('刷新菜单目录');
   }
};
var SubMenu={
  add:function(){
    console.log('增加子菜单');
  },
  del:function(){
    console.log('删除子菜单');
  }
};
/*
接下来我们需要把这两个对象的三种不同行为refresh,add,del,封装进不同的命令类中.以便创建具体的command
对象,然后调用具体的execute方法.
*/
var RefreshMenuBarCommand=function(receiver){
  this.receiver=receiver;//将请求的真正接收者传进来以便在execute方法中调用接收者的方法
};
RefreshMenuBarCommand.prototype.execute=function(){//这就是对前边的command.execute的具体实现
  this.receiver.refresh();
};
var AddSubMenuCommand=function(receiver){
  this.receiver=receiver;
};
AddSubMenuCommand.prototype.execute=function(){
  this.receiver.add();
};
var DelSubMenuCommand=function(receiver){
  this.receiver=receiver;
};
DelSubMenuCommand.prototype.execute=function(){
  this.receiver.del();
};

//封装好各种命令类后就创建具体的命令对象,同时把请求的接收者传进去
var refreshMenuBarCommand=new RefreshMenuBarCommand(MenuBar);
var addSubMenuCommand=new AddSubMenuCommand(SubMenu);
var delSubMenuCommand=new DelSubMenuCommand(SubMenu);
//创建好具体的命令对象以后,就可以像不同的按钮中加入不同的具体命令了
setCommand(button1,refreshMenuBarCommand);
setCommand(button2,addSubMenuCommand);
setCommand(button3,delSubMenuCommand);



