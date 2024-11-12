import { useState } from "react";
import "./App.css";
import { Personagens } from "./Personagens";

function App() {
  const [count, setCount] = useState(0);

  return <Personagens />;
}

export default App;
