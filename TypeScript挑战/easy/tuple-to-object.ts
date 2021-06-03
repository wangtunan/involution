import { Equal, Expect } from "../index"

// 用法：给定一个数组，转换成key/value的形式 ['msg', 'name'] => { msg: 'msg', name: 'name' }
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

// example
const tuple = ['msg', 'name'] as const
type test = TupleToObject<typeof tuple>

// test
type testCases = [
  Expect<Equal<{ msg: 'msg', name: 'name' }, TupleToObject<typeof tuple>>>
]
