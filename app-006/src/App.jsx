import { useState } from "react";
import "./App.css";
import { useStore } from "./zustand";
import { BearCounter } from "./components/BearCounter";
import { Controls } from "./components/Controls";

const App = () => {
  const updateBears = useStore((state) => state.updateBears);
  const [number, setNumber] = useState(10);
  return (
    <>
      <h1>Vite + React</h1>
      <hr />
      <BearCounter />
      <hr />
      <Controls />
      <hr />
      <input
        type="number"
        placeholder="set value"
        value={number}
        onChange={(evt) => setNumber(evt.target.value)}
      />
      <button onClick={() => updateBears(parseInt(number))}>Set Value</button>
    </>
  );
};

export default App;
