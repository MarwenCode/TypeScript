import React , {useContext} from 'react';
import { CartContext } from '../context/CartProvider';
import Nav from './Nav';


type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
   
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    // const {totalItems, totalPrice } = useContext(CartContext)




  return (
    <header className="header">
    <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
            <p>Total Items: </p>
            <p>Total Price: </p>
        </div>
    </div>
       
       <Nav viewCart={viewCart} setViewCart={setViewCart} />
</header>
  )
}

export default Header