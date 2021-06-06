import { Equal, Expect } from '../index'
// 用法：可深层次Pick
// tools: 根据路径取值
type GetType<T, S> = 
  S extends `${infer S1}.${infer S2}`
    ? S1 extends keyof T
      ? { [K in S1]: GetType<T[S1], S2> }
      : never
    : S extends keyof T
      ? { [K in S]: T[K] }
      : never
// tools: 联合类型转交集
type UnionToIntersection<U> = 
  (U extends any
    ? (x: U) => any
    : never) extends ((x: infer V) => any)
      ? V
      : never
type DeepPick<T, U extends string> = UnionToIntersection<U extends infer keys ? GetType<T, keys> : never>

// interface
type Obj = {
  a: number,
  b: string,
  c:  boolean,
  obj: {
    d: number,
    e: string,
    f:  boolean,
    obj2: {
      g: number,
      h: string,
      i: boolean,
    }
  },
  obj3: {
    j: number,
    k: string,
    l: boolean,
  }
}

// example
type result = DeepPick<Obj, 'a'>


// test
type testCases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown >>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string }}>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>, { a: number } & { obj: { e: string }} & { obj: { obj2: { i: boolean } }}>>
]