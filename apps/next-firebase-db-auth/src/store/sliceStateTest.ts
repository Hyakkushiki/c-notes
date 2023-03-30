import { create, StateCreator } from "zustand";
import { devtools, persist, combine, createJSONStorage } from "zustand/middleware";

interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}
const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [["zustand/devtools", never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - state.bears })),
});

interface FishSlice {
  fishes: number;
  addFish: () => void;
}
const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [["zustand/devtools", never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

export const useBoundStore = create<BearSlice & FishSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createBearSlice(...a),
        ...createFishSlice(...a),
      }),
      {
        name: "bound-store", // Name of the persisted store
        version: 1, // Version of the persisted store (useful for migrations)
        storage: createJSONStorage(() => sessionStorage), // Storage mechanism to use (default is localStorage)
      }
    )
  )
);

// getStorage: () => typeof window !== 'undefined' ? localStorage : null,