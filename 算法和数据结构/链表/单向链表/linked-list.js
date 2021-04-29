// 链表：存储有序的元素集合，不同于数组，链表中元素在内存中并不是连续放置的
//      它由存储元素本身的节点和一个指向下一个元素的引用组成.
// 优点：添加、删除时不需要移动元素(对比数组)
// 缺点：遍历时，需要从头开始遍历查找(对比数组)
class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  constructor () {
    this.count = 0
    this.head = null
  }
  push (value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      const current = this.getElementAt(this.count - 1)
      current.next = node
    }
    this.count++
  }
  insert (value, index) {
    if (index < 0 || index > this.count) {
      return false
    }
    const node = new Node(value)
    let current
    if (index === 0) {
      current = this.head
      node.next = current
      this.head = node
    } else {
      const prev = this.getElementAt(index - 1)
      current = prev.next
      node.next = current
      prev.next = node
    }
    this.count++
    return true
  }
  getElementAt(index) {
    if (index < 0 || index > this.count) {
      return undefined
    }
    let node = this.head
    for (let i = 0; i < index && node !== null; i++) {
      node = node.next
    }
    return node
  }
  getHead () {
    return this.head
  }
  remove (value) {
    const index = this.indexOf(value)
    if (index === -1) {
      return false
    }
    return this.removeAt(index)
  }
  removeAt (index) {
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      const prev = this.getElementAt(index - 1)
      current = prev.next
      prev.next = current.next
    }
    this.count--
    return current.value
  }
  indexOf (value) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (current.value === value) {
        return i
      }
      current = current.next
    }
    return -1
  }
  isEmpty () {
    return this.size () === 0
  }
  size () {
    return this.count
  }
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    const res = []
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      res.push(current.value)
      current = current.next
    }
    return res.join(',')
  }
}