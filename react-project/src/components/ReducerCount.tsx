// import { ReactNode, useReducer, ChangeEvent } from "react";

// const initialState = {
//   count: 0,
//   text: "",
// };

// type Action =  { type: "INCREMENT" | "DECREMENT" } | { type: "PAYLOAD"; payload: string }; 

 

// const reducer = (state: typeof initialState, action: Action): typeof initialState => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     case "PAYLOAD":
//       return { ...state, text: action.payload };

//     default:
//       throw new Error();
//   }
// };

// const ReducerCount = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const increment = () =>
//     dispatch({
//       type: "INCREMENT",
//     });
//   const decrement = () =>
//     dispatch({
//       type: "DECREMENT",
//     });

//   const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//         type: "PAYLOAD",
//       payload: e.target.value, // Set the payload value
    
      
//     })
//   }

//   return (
//     <>
//       <h1> Reducer count : {state.count}</h1>
//       <div>
//                 <button onClick={increment}>+</button>
//                 <button onClick={decrement}>-</button>
//             </div>
//             <input type="text" onChange={handleText} value={state.text} />
//       <p>Text: {state.text}</p>
//     </>
//   );
// };

// export default ReducerCount;
