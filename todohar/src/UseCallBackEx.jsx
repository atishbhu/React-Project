import React, { memo, useCallback, useState } from "react";

function ParentComponent() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const inputFn = useCallback(() => {
    console.log("Hello useCallback");
  }, []);
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleCounter}>count {counter}</button>
      <ChildComponent inputFn={inputFn} />
    </div>
  );
}

const ChildComponent = memo(({ inputFn }) => {
  console.log("child render");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
});

export default ParentComponent;
