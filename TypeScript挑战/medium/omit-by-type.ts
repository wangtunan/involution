import { Equal, Expect } from '../index'

// 用法：OmitByType是用来按照类型剔除的
type OmitByType<T, U> = {
  [P in keyof T as U extends T[P] ? never : P]: T[P]
}

// interface
interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}
interface ModelOmitBoolean {
  name: string;
  count: number
}
interface ModelOmitString {
  count: number;
  isReadonly: boolean;
  isEnable: boolean
}
interface ModelOmitNumber {
  name: string;
  isReadonly: boolean;
  isEnable: boolean
}

// example
type result = OmitByType<Model, boolean>

// test
type cases = [
  Expect<Equal<OmitByType<Model, boolean>, ModelOmitBoolean>>,
  Expect<Equal<OmitByType<Model, string>, ModelOmitString>>,
  Expect<Equal<OmitByType<Model, number>, ModelOmitNumber>>,
]