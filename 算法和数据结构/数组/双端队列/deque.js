// 双端队列：是一种允许我们同时从前端和后端添加和移除元素的特殊队列
class Deque {
  constructor () {
    this.count = 0
    this.firstCount = 0
    this.items = {}
  }
  addFront (element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.firstCount > 0) {
      this.firstCount--
      this.items[this.firstCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.firstCount = 0
      this.count++
      this.items[0] = element
    }
  }
  addBack (element) {
    this.items[this.count++] = element
  }
  removeFront () {
    if (this.isEmpty()) {
      return undefined
    }
    const val = this.items[this.firstCount]
    delete this.items[this.firstCount]
    this.firstCount++
    return val
  }
  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const val = this.items[this.count]
    delete this.items[this.count]
    return val
  }
  peekFront () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.firstCount]
  }
  peekBack () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  size () {
    return this.count - this.firstCount
  }
  isEmpty () {
    return this.size() === 0
  }
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let str = this.items[this.firstCount]
    for (let i = this.firstCount + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
  }
  clear () {
    this.count = 0
    this.firstCount = 0
    this.items = {}
  }
}