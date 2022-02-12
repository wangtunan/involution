import { Equal, Expect } from '../index'

// 用法：PickByType是用来根据类型选取属性的
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}

// interface
interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

// example
type result = PickByType<Model, boolean>

// test
type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]