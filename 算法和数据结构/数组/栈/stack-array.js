// 栈：遵循一种后进先出原则的集合
// 使用数组来模拟栈
class Stack {
  constructor () {
    this.items = []
  }
  push (element) {
    return this.items.push(element)
  }
  pop () {
    return this.items.pop()
  }
  peek () {
    return this.items[this.items.length - 1]
  }
  isEmpty () {
    return this.size === 0
  }
  size () {
    return this.items.length
  }
  clear () {
    this.items = []
  }
}