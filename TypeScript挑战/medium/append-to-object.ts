import { Equal, Expect } from '../index'
// 用法：向指定对象添加一个额外的属性(key/value)
type BasicKeyType = string | number | symbol 
type AppendToObject< T extends object, U extends BasicKeyType, V extends any> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}
// interface
type Expect1 = {
  id: number;
  home: boolean;
}
type Expect2 = {
  id: number;
  home: number;
}
type Expect3 = {
  id: number;
  isMotherRussia: false | undefined;
}

// example
type obj = { id: number; }
type result = AppendToObject<obj, 'value', string>

type testCases = [
  Expect<Equal<AppendToObject<obj, 'home', boolean>, Expect1>>,
  Expect<Equal<AppendToObject<obj, 'home', number>, Expect2>>,
  Expect<Equal<AppendToObject<obj, 'isMotherRussia', false | undefined>, Expect3>>,
]