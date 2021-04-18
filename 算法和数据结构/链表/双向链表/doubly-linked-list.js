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
}