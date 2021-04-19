// 双向链表：在单向链表的基础上有一个指向上一个元素的prev
class DoublyNode {
  constructor (value, prev = null, next = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}
class DoublyLinkedList {
  constructor () {
    this.count = 0
    this.head = null
    this.tail = null
  }
  push (value) {
    const node = new DoublyNode(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }
  insert (value, index) {
    if (index < 0 || index > this.count) {
      return false
    }
    const node = new DoublyNode(value)
    let current = this.head
    if (index === 0) {
      if (this.head === null) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
    } else if (index === this.count) {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else {
      const prev = this.getElementAt(index - 1)
      current = prev.next
      node.next = current
      prev.next = node
      node.prev = prev
      current.prev = node
    }
    this.count++
    return true
  }
  getElementAt (index) {
    if (index < 0 || index > this.count) {
      return undefined
    }
    let current = this.head
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next
    }
    return current
  }
  getHead () {
    return this.head
  }
  getTail () {
    return this.tail
  }
  remove (value) {
    const index = this.indexOf(value)
    if (index === -1) {
      return false
    }
    return this.removeAt(index)
  }
  removeAt (index) {
    if (index < 0 || index > this.count) {
      return false
    }
    let current = this.head
    if (index === 0) {
      this.head = this.head.next
      if (this.count === 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (index === this.count - 1) {
      current = this.tail
      this.tail = current.prev
      this.tail.next = null
    } else {
      current = this.getElementAt(index)
      const prev = current.prev
      prev.next = current.next
      current.next.prev = prev
    }
    this.count--
    return true
  }
  indexOf (value) {
    if (this.isEmpty()) {
      return -1
    }
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
    return this.size() === 0
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
    for (let i = 0; i < this.count && current !== null;i++) {
      res.push(current.value)
      current = current.next
    }
    return res.join(',')
  }
}