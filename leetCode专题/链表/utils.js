class Node {
  constructor (value) {
    this.val = value
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }
  push (value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
  }
  getHead () {
    return this.head
  }
}