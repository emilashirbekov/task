import React from "react";
import { useCounter } from "../context/CounterContextProvider";

const Counter = () => {
  const { counter, inc, dec } = useCounter();
  return (
    <div className="App">
      <div>
        <h1>{counter}</h1>
        <button onClick={dec} className="minus">
          - Минус
        </button>
        <button onClick={inc} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
};

export default Counter;
