import { ReactNode, useReducer, ChangeEvent } from "react";

const initialState = {
  count: 0,
};

type Action = {
    type: "INCREMENT" | "DECREMENT"; // Use string literal types
  };

const reducer = (state: typeof initialState, action: Action): typeof initialState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      throw new Error();
  }
};

const ReducerCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () =>
    dispatch({
      type: "INCREMENT",
    });
  const decrement = () =>
    dispatch({
      type: "DECREMENT",
    });

  return (
    <>
      <h1> Reducer count : {state.count}</h1>
      <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
    </>
  );
};

export default ReducerCount;
