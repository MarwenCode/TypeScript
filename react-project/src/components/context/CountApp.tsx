import React, {useContext} from 'react';

import { CounterContext } from './CounterContext';

const CountApp = () => {
    const {state,
        increment,
        decrement,
        handleText,} = useContext(CounterContext)
  return (
            <>
              <h1> Reducer count : {state.count}</h1>
              <div>
                        <button onClick={increment}>+</button>
                        <button onClick={decrement}>-</button>
                    </div>
                    <input type="text" onChange={handleText} value={state.text} />
              <p>Text: {state.text}</p>
            </>
          
  )
}

export default CountApp