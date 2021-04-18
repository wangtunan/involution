// 队列：遵循一种先进先出原则的一组有序的项。
class Queue {
  constructor () {
    this.count = 0
    this.firstCount = 0
    this.items = {}
  }
  enqueue (element) {
    this.items[this.count++] = element
  }
  dequeue () {
    if (this.isEmpty()) {
      return undefined
    }
    const val = this.items[this.firstCount]
    delete this.items[this.firstCount]
    this.firstCount++
    return val
  }
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.firstCount]
  }
  size () {
    return this.count - this.firstCount
  }
  isEmpty () {
    return this.size() === 0
  }
  clear () {
    this.count = 0
    this.firstCount = 0
    this.items = {}
  }
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = this.items[this.firstCount]
    for(let i = this.firstCount + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
  }
}