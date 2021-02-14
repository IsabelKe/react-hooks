import React, { useState } from "react";

export default function UseStateExample() {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </>
  );
}
