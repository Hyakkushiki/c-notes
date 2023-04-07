import { create } from "zustand";
import {
  devtools,
  persist,
  combine,
  createJSONStorage,
} from "zustand/middleware";

import { ITasks } from "./types/ITask";
import { createTaskSlice } from "./slices/taskSlice";
import { FirebaseAuthType, createAuthSlice } from "./slices/authSlice";

// const useBearStore = create(
//     combine({ bears: 0 }, (set) => ({
//       increase: (by: number) => set((state) => ({ bears: state.bears + by })),
//     }))
//   )

export const useStore = create<ITasks & FirebaseAuthType>()(
  devtools(
    persist(
      (...a) => ({
        ...createTaskSlice(...a),
        ...createAuthSlice(...a),
      }),
      {
        name: "combined-store", // Name of the persisted store
        version: 1, // Version of the persisted store (useful for migrations)
        storage: createJSONStorage(() => sessionStorage), // Storage mechanism to use (default is localStorage)
      }
    )
  )
);

export default useStore;

// https://github.com/pmndrs/zustand/tree/main/docs/guides
// https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
// https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern <-- typed slices
