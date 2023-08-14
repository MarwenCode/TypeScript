import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState<number>(0);
  

  return (
    <>
    Hello
    <Counter setCount={setCount}  > count is {count}</Counter>
  
    </>
  )
}

export default App
