// 循环链表：循环链表和单向链表的唯一区别是最后一个元素指向头结点(head)而不是null
class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}
class CircularLinkedList {
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
    node.next = this.head
    this.count++
  }
  insert (value, index) {
    if (index < 0 || index > this.count) {
      return false
    }
    const node = new Node(value)
    let current = this.head
    if (index === 0) {
      if (this.head === null) {
        this.head = node
        node.next = this.head
      } else {
        node.next = current
        this.head = node
        current = this.getElementAt(this.count)
        current.next = this.head
      }
    } else {
      const prev = this.getElementAt(index - 1)
      node.next = prev.next
      prev.next = node
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
  remove (value) {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }
  removeAt (index) {
    if (index < 0 || index > this.count) {
      return undefined
    }
    let current = this.head
    if (index === 0) {
      if (this.count === 1) {
        this.head = null
      } else {
        const removed = this.head
        current = this.getElementAt(this.count - 1)
        this.head = this.head.next
        current.next = this.head
        current = removed
      }
    } else {
      const prev = this.getElementAt(index - 1)
      current = prev.next
      prev.next = current.next
    }
    this.count--
    return current.value
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
    for (let i = 0; i < this.count && current !== null; i++) {
      res.push(current.value)
      current = current.next
    }
    return res.join(',')
  }
}