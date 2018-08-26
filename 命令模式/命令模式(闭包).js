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

var setCommand=function(button,command){
   button.onclick=function(){
      command.execute();
   }
}
MenuBar={
  refresh:function(){
    console.log('刷新菜单')
  }
};
SubMenu={
  add:function(){
    console.log('添加子菜单');
  },
  del:function(){
    console.log('删除子菜单');
  }
};
//将行为和接收者封装到命令当中
var RefreshMenuBarCommand=function(receiver){
           return {
                execute:function(){
                  receiver.refresh();
                }
           }
}
var  refreshMenuBarCommand=RefreshMenuBarCommand(Menubar);
setCommand(button1,refreshMenuBarCommand);
