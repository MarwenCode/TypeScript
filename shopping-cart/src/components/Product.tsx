import React, {
  Dispatch,
  ReducerAction,
  ReactElement,
  useContext,
} from "react";
import { ProductType, ProductsContext } from "../context/ProductsProvider";
import { CartItemType, Action } from "../context/CartProvider";
import { CartContext } from "../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: Dispatch<Action>;
  cart: CartItemType[];
};

const Product = ({ product, dispatch, cart }: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  console.log(img);

  const onAddToCart = () =>
    dispatch({
      type: "ADD",
      payload: { ...product, qty: 1 },
    });

    const inCart: boolean = cart.some((item: CartItemType) => item.sku === product.sku);


  return (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
      {inCart ? " → Item in Cart: ✔️" : null}
    </article>
  );
};

export default Product;
