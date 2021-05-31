// 用法：将一个多维数组拍平成一个一维数组
type Flatten<
  T extends any[],
  A extends any[] = []
> = T extends [infer F, ...infer R]
      ? F extends any[]
        ? Flatten<R, [...A, ...F]>
        : Flatten<R, [...A, F]>
      : A


// example
type result = Flatten<[1, 2, [3]]>
