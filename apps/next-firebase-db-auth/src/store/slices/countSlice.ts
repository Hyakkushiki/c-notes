import { StateCreator } from "zustand";

// // add
// const countSlice: StateCreator<ITodo> = (set, get)=>({
//     todos: ['create','next js app','using typescript'],
//     addTodo(todo: string){
//         set(state => ({todos:[...state.todos, todo]}) )
//     }
// })

// export default countSlice;

// import create from 'zustand';
// import { persist } from 'zustand/middleware';

// const useStore = create(
//   persist(
//     (set, get) => ({
//       count: 0,
//       increment: () => set(state => ({ count: state.count + 1 })),
//       decrement: () => set(state => ({ count: state.count - 1 })),
//     }),
//     {
//       name: 'counter-store', // Name of the persisted store
//       version: 1, // Version of the persisted store (useful for migrations)
//       getStorage: () => localStorage, // Storage mechanism to use (default is localStorage)
//     }
//   )
// );

// export default useStore;
