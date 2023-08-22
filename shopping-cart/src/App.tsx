import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)
  

  return (
    <div className='App'>
    <Header veiwCart={viewCart} setVeiwCart={setViewCart} />
   <Cart />
   <ProductList />

     
    </div>
  )
}

export default App
