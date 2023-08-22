import Reac , {useContext} from 'react';
import { CartContext } from '../context/CartProvider';


type PropsType = {
    veiwCart: boolean,
    setVeiwCart: React.Dispatch<React.SetStateAction<boolean>>,
   
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    const {totalItems, totalPrice } = useContext(CartContext)




  return (
    <header className="header">
    <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    </div>
    <Nav viewCart={viewCart} setViewCart={setViewCart} />
</header>
  )
}

export default Header