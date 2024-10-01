import { useStore } from "../zustand";

export const Controls = () => {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>clear</button>
    </>
  );
};
