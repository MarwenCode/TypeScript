import { ChangeEvent, ReactElement, memo, Dispatch } from "react";
import { CartContext } from "../context/CartProvider";
import { CartItemType, Action } from "../context/CartProvider";

type PropsType = {
  item: CartItemType;
  dispatch: Dispatch<Action>;
};

const CartLineItem = ({ item, dispatch }: PropsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

  const lineTotal: number = item.qty * item.price;

  const increase = (id: string) => {
    dispatch({ type: "Increase", payload: id });
  };
  const decrease = (id: string) => {
    dispatch({ type: "Decrease", payload: id });
  };

  return (
    <div className="cart-line-item">
      <img src={img} alt={item.name} className="cart__img" />
      <div className="cart-item-details">
        <p>{item.name}</p>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.qty}</p>
        <p>Line Total: {lineTotal}</p>
      </div>
      <button onClick={() => increase(item.sku)}>+</button>
      <button onClick={() => decrease(item.sku)}>-</button>
    </div>
  );
};

export default CartLineItem;
