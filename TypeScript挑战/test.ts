// 实现partial:把T对象的所有属性变为可选的
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}
// 实现required:把T对象的所有属性变为必填的
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}
// 实现mutable:把T对象的所有属性变为可改的
type MyMutable<T> = {
  -readonly [P in keyof T]: T[P]
}
// 实现readonly: 把T对象的所有属性变成只读的
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
// 实现Record: 把K中的所有属性变成指定的T类型
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}
// 实现pick:从T对象中选取指定的K属性
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
// 实现exclude: 从T中移除指定的K属性(差集)
type MyExclude<T, K> = T extends K ? never : T
// 实现omit:从T对象中移除指定的K属性
type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>
// 实现Extract:从T和U中取公共部分
type MyExract<T, U> = T extends U ? T : never
// 实现ReturnType: 获取一个函数的返回类型
type MyReturnType<T> = T extends (...args: any) => infer R ? R : never
// 实现PromiseType: 获取一个Promise包裹返回类型
type PromiseType<T> = T extends Promise<infer R> ? R : never
// 实现数组转对象：['msg', 'name'] => { msg: 'msg', name: 'name' }
type TupleToObject<T extends any[]> = {
  [P in T[number]]: P
}
// 实现First：取数组第一个元素
type First<T extends any[]> = T extends [] ? never: T[0]
// 实现Length: 获取一个数组的长度
type Length<T> = T extends { length: number } ? T['length'] : never
// 实现If：当C为true的时候，返回T类型;当C为false的时候，返回F类型
type If<C extends boolean, T, F> = C extends true ? T : F
// 实现Array.prototype.concat方法
type Concat<T extends any[], K extends any[]> = [...T, ...K]
// 实现Array.prototype.includes方法
type Includes<T extends any[], K> = K extends T[number] ? true : false


interface Todo {
  readonly title: string;
  readonly desc?: string;
  completed: boolean;
}
interface PageInfo {
  title: string;
  src: string;
}
function add (a: any, b: any): number | string {
  return a + b
}

type partialResult = MyPartial<Todo>
type requiredResult = MyRequired<Todo>
type mutableResult = MyMutable<Todo>
type readonlyResult = MyReadonly<Todo>
type recordResult = MyRecord<'login' | 'home', PageInfo>
type pickResult = MyPick<Todo, 'title' | 'desc'>
type excludeResult = MyExclude<'name' | 'age' | 'sex', 'sex'>
type omitResult = MyOmit<Todo, 'sex'>
type extractResult = MyExract<keyof Todo, 'title' | 'src'>
type returnTypeResult = MyReturnType<typeof add>
type promiseTypeResult = PromiseType<Promise<number[]>>
type tupleToResult = TupleToObject<['msg', 'name']>
type firstResult = First<[undefined]>
type lengthResult = Length<{ 1: 'AAA', length: 10 }>
type ifResult = If<false, 'a', 'b'>
type concatResult = Concat<[1, 2], ['msg', true]>
type inclduesResult = Includes<[1, 2], 1>
