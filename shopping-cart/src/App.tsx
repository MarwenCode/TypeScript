import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)
  

  return (
    <div className='App'>
     
    <Header viewCart={viewCart} setViewCart={setViewCart}  />
    {viewCart ? <Cart  /> : <ProductList />}
  
   <Footer viewCart={viewCart} />

     
    </div>
  )
}

export default App
