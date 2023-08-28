import { useState, useContext, Dispatch } from "react";
import { CartContext } from "../context/CartProvider";
import { CartItemType, Action } from "../context/CartProvider";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { cart, dispatch, totalItems, totalPrice } = useContext(
    CartContext
  ) as {
    cart: CartItemType[];
    totalItems: number;
    totalPrice: string;
    dispatch: Dispatch<Action>;
  };

  const onSubmitOrder = () => {
    dispatch({
      type: "SUBMIT",
      payload: {
        sku: undefined,
        name: undefined,
        price: undefined,
        qty: undefined
      }
    });
    setConfirm(true);
  };

  return (
    <div>
      {confirm ? (
        <h2>Thank you for your order.</h2>
      ) : (
        <>
          <h2 className="offscreen">Cart</h2>
          <ul className="cart">
            {cart.map((item) => {
              return (
                <CartLineItem key={item.sku} item={item} dispatch={dispatch} />
              );
            })}
          </ul>
          <div className="cart__totals">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
            <button
              className="cart__submit"
              disabled={!totalItems}
              onClick={onSubmitOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
