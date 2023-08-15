import { useState } from 'react';
import Counter from './components/Counter';
import List from './components/List';

function App() {
  const [count, setCount] = useState<number>(0);

  const items = ["☕ Coffee", "🌮 Tacos", "💻 Code"];

  return (
    <>
    Hello
    <Counter setCount={setCount}  > count is {count}</Counter>
    <List items={items} />
  
    </>
  )
}

export default App
