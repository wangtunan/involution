import { Equal, Expect } from '../index'
// 用法：向指定对象添加一个额外的属性(key/value)
type BasicKeyType = string | number | symbol 
type AppendToObject< T extends object, U extends BasicKeyType, V extends any> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}
// interface
type Expect1 = {
  id: 1;
  home: boolean;
}
type Expect2 = {
  id: 1;
  home: 1;
}
type Expect3 = {
  id: 1;
  isMotherRussia: false | undefined;
}

// example
type obj = { id: 1 }
type result = AppendToObject<obj, 'value', 4>

type testCases = [
  Expect<Equal<AppendToObject<obj, 'home', boolean>, Expect1>>,
  Expect<Equal<AppendToObject<obj, 'home', 1>, Expect2>>,
  Expect<Equal<AppendToObject<obj, 'isMotherRussia', false | undefined>, Expect3>>,
]