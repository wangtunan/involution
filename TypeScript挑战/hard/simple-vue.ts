import { Equal, Expect } from '../index'

// 用法：根据Vue实例的options参数，推导出其类型
type Computed<C extends Record<string, any>> = {
  [P in keyof C]: ReturnType<C[P]>
}
type VueComponentOptions<D, C, M> = {
  data(this: {}): D;
  computed: C & ThisType<D & Computed<C> & M>,
  methods: M & ThisType<D & Computed<C> & M>
}
declare function SimpleVue<D, C, M> (
  options: VueComponentOptions<D, C, M>
): D & Computed<C> & M


// example & test
const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
      return true
    }
  },
})

const { fullname, amount, getRandom, hi } = instance
type testCases = [
  Expect<Equal<typeof fullname, string>>,
  Expect<Equal<typeof amount, number>>,
  Expect<Equal<typeof getRandom, () => number>>,
  Expect<Equal<typeof hi, () => true>>
]