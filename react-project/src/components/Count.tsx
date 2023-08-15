import React, { useState, useEffect, useCallback, useRef } from "react";

interface User {
  id: number;
  username: string;
}

const Count = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null)

//   console.log(inputRef?.current) 
  console.log(inputRef?.current?.value)

  const addTwo = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  );

  useEffect(() => { 
    console.log("mouting");

    return () => console.log("unmounting");
  }, [users]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default Count;
