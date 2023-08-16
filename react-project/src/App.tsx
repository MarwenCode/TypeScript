import { useState } from 'react';
import Counter from './components/Counter';
import List from './components/List';
import Count from './components/Count';
import CountApp from './components/context/CountApp';
// import ReducerCount from './components/ReducerCount';

function App() {
  const [count, setCount] = useState<number>(0);

  const items = ["☕ Coffee", "🌮 Tacos", "💻 Code"];

  return (
    <>
    Hello
    {/* <Counter setCount={setCount}  > count is {count}</Counter>
    <List items={items} />
    <Count /> */}
    {/* <ReducerCount /> */}
    <CountApp/>
  
    </>
  )
}

export default App
