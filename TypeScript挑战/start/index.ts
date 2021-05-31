// import { Equal, Expect, NotAny } from '@type-challenges/utils'
import { Equal, Expect, NotAny } from '../index'

// challenge: HelloWorld需要是一个string类型
type HelloWorld = string

type textCase = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]