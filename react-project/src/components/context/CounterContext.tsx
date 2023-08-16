import React, {
  useState,
  useReducer,
  useEffect,
  createContext,
  ChangeEvent,
  ReactNode 
} from "react";

type StateType = {
  count: number;
  text: string;
};
const initialState: StateType = { count: 0, text: "" };

// const initContextState = {
//   state: initialState,
//   increment: () => {},
//   decrement: () => {},
//   handleText: (e: ChangeEvent<HTMLInputElement>) => {},
// };

interface CounterProviderProps {
    children: ReactNode;
}

// export const CounterContext = React.createContext(initContextState);
export const CounterContext = React.createContext();

type Action =
  | { type: "INCREMENT" | "DECREMENT" }
  | { type: "PAYLOAD"; payload: string };

const reducer = (
  state: typeof initialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "PAYLOAD":
      return { ...state, text: action.payload };

    default:
      throw new Error();
  }
};

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () =>
    dispatch({
      type: "INCREMENT",
    });
  const decrement = () =>
    dispatch({
      type: "DECREMENT",
    });

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "PAYLOAD",
      payload: e.target.value, // Set the payload value
    });
  };

  return (
    <CounterContext.Provider
      value={{
        state,
        increment,
        decrement,
        handleText,
      }}>
      {children}
    </CounterContext.Provider>
  );
  
};
