// 封装栈类
function Stack() {
  // 栈中的属性
  this.items = [];

  // 栈的相关操作
  // 1.将元素压入栈
  // this.push = function() {

  // }
  Stack.prototype.push = function(element) {
    this.items.push(element)
  }

  // 2.从栈中取元素


  // 3.查看一下栈顶元素


  // 4.判断栈是否为空


  // 5.获取栈中元素的个数


  // 6.toString() 方法
  

}
// 栈的使用
var s = new Stack()