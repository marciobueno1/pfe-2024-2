import { useStore } from "../zustand";

export const BearCounter = () => {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
};
