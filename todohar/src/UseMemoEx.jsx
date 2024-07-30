import React, { useState, useMemo } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  let result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i <= inputValue; i++) {
      sum += i;
    }
    return sum;
  }, [inputValue]);

  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <h1>sum upto {result}</h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          Counter {counter}
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
