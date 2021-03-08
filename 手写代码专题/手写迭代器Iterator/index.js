function createIterator (items) {
  let index = 0
  return {
    next: function () {
      const done = index >= items.length
      const value = done ? undefined : items[index++]
      return {
        value,
        done
      }
    }
  }
}

const iterator = createIterator([1, 2, 3])
console.log(iterator.next())  // { value: 1, done: false }
console.log(iterator.next())  // { value: 2, done: false }
console.log(iterator.next())  // { value: 3, done: false }
console.log(iterator.next())  // { value: undefined, done: true }