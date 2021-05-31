import { Equal, Expect } from "../index"

// 用法：将指定对象的所有属性设置为T类型
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

// interface
interface PageInfo {
  title: string;
}
interface Expect1 {
  home: PageInfo;
  login: PageInfo;
  list: PageInfo;
}

// example
type pageList = 'home' | 'login' |'list'
type recordResult = MyRecord<pageList, PageInfo>

// test
type testCases = [
  Expect<Equal<Expect1, MyRecord<pageList, PageInfo>>>
]