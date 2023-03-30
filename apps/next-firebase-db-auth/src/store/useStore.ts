import { create } from 'zustand'
import { devtools, persist,combine } from 'zustand/middleware'

import ITodo from './types/ITodo'
import createTodoSlice from './slices/todoSlice'


interface BearState {
  bears: number
  increase: (by: number) => void
}

// const useBearStore = create<BearState>()(
//   devtools(
//     persist(
//       (set) => ({
//         bears: 0,
//         increase: (by) => set((state) => ({ bears: state.bears + by })),
//       }),
//       {
//         name: 'bear-storage',
//       }
//     )
//   )
// )
const useBearStore = create(
    combine({ bears: 0 }, (set) => ({
      increase: (by: number) => set((state) => ({ bears: state.bears + by })),
    }))
  )



// const useStore = create<ITodo>()((...a) =>({
//     ...createTodoSlice(...a)
// }))

export default useBearStore;

// https://github.com/pmndrs/zustand/tree/main/docs/guides
// https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
// https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern <-- typed slices