import { Equal, Expect } from '../index'

// 用法：BEM是用来将字符串连接成CSS BEM格式的。
type ArrayToString<
  T extends any[],
  P extends string
> = T extends [] ? '' : `${P}${T[number]}`
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${ArrayToString<E, '__'>}${ArrayToString<M, '--'>}`

// example
type result = BEM<'btn', ['price'], ['small']>

// test
type cases = [
  Expect<Equal<BEM<'btn', [], []>, 'btn'>>,
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]

type t2 = `A__${['B', 'C', 'D'][number]}`