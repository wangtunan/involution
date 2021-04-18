// 栈：遵循一种后进先出原则的集合
// 使用JavaScript来模拟栈
class Stack {
  constructor () {
    this.count = 0
    this.items = {}
  }
  push (element) {
    this.items[this.count++] = element
  }
  pop () {
    if (this.isEmpty()) {
      this.count = 0
      return undefined
    }
    this.count--
    const val = this.items[this.count]
    delete this.items[this.count]
    return val
  }
  size () {
    return this.count
  }
  isEmpty () {
    return this.size() <= 0
  }
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count-1]
  }
  clear () {
    this.count = 0
    this.items = {}
  }
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = this.items[0]
    for(let i = 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
   }
}