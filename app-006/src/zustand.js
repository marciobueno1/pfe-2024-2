import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useStore = create(
  persist(
    immer((set) => ({
      bears: 0,
      increasePopulation: () =>
        set((state) => {
          state.bears += 1;
        }),
      removeAllBears: () =>
        set((state) => {
          state.bears = 0;
        }),
      updateBears: (newBears) =>
        set((state) => {
          state.bears = newBears;
        }),
    })),
    {
      name: "bear-storage",
      // storage: createJSONStorage(() => localStorage),
    }
  )
);
