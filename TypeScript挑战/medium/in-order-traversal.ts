import { Equal, Expect } from '../index'

// 用法：InOrderTraversal是用来实现二叉树的中序遍历的
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// const
const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

// way1
type InOrderTraversal<
  T extends TreeNode | null,
  U extends TreeNode = NonNullable<T>
> = T extends TreeNode
  ? [...InOrderTraversal<U['left']>, U['val'], ...InOrderTraversal<U['right']>]
  : []
  
// way2
// type InOrderTraversal<T extends TreeNode | null> = 
//   T extends TreeNode
//     ? T['left'] extends TreeNode
//       ? [...InOrderTraversal<T['left']>, T['val'], ...InOrderTraversal<T['right']>]
//       : T['right'] extends TreeNode
//         ? [T['val'], ...InOrderTraversal<T['right']>]
//         : [T['val']]
//     : []

// example
// @ts-ignore
type result = InOrderTraversal<typeof tree1>