import { ChangeEvent, ReactElement, memo, Dispatch } from "react"
import { CartContext } from "../context/CartProvider";
import { CartItemType, Action } from "../context/CartProvider";


type PropsType = {
    item: CartItemType,
    dispatch: Dispatch<Action>;
   
}

const CartLineItem = ({ item, dispatch}: PropsType) => {
    const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href

    const lineTotal: number = (item.qty * item.price)


  const increase = (id: string) => {
    dispatch({ type: "Increase", payload:id})
  }


  return (
    <div>
         <img src={img} alt={item.name} className="cart__img" />

        <button onClick={() => increase(item.sku)}>+ </button>
    </div>
  )
}

export default CartLineItem