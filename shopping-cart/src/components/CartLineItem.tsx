import { ChangeEvent, ReactElement, memo, Dispatch } from "react"
import { CartContext } from "../context/CartProvider";
import { CartItemType, Action } from "../context/CartProvider";


type PropsType = {
    item: CartItemType,
    dispatch: Dispatch<Action>;
   
}

const CartLineItem = () => {
  return (
    <div>CartLineItem</div>
  )
}

export default CartLineItem