import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    console.log("valor de count antes de alterar", count);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    console.log("valor de count após alterar", count);
  };

  console.log("início da renderização: ", count);
  return <button onClick={handleButtonClick}>count is {count}</button>;
};
