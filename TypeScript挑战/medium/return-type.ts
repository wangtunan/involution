import { Equal, Expect } from '../index'

// 用法：取函数的返回类型
type MyReturnType<T> = T extends (...args:any) => infer R ? R : never

// example
interface UserInfo {
  username: string;
  age: number;
  address: string;
}
function login (username: string, password: string): UserInfo {
  const user: UserInfo = { username: '', age: 0, address: '' }
  if (username && password) {
    user.username = username
    user.age = 10
    user.address = 'China'
  }
  return user
}
type returnTypeResult = MyReturnType<typeof login>

// test
type testCases = [
  Expect<Equal<UserInfo, MyReturnType<typeof login>>>
]