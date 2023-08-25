import React, { Dispatch, ReducerAction, ReactElement } from 'react';
import { ProductType, ProductsContext } from '../context/ProductsProvider';
import { CartItemType, Action } from '../context/CartProvider';
import { CartContext } from '../context/CartProvider';

type PropsType = {
    product: ProductType,
    dispatch: Dispatch<Action>;
}

const Product = ({ product, dispatch}: PropsType): ReactElement => {


    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => dispatch({
        type: "ADD", payload: {...product, qty:1}

    })

    // const itemInCart = product ? ' → Item in Cart: ✔️' : null



  return (
    <article className="product">
    <h3>{product.name}</h3>
    <img src={img} alt={product.name} className="product__img" />
    <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
    <button onClick={onAddToCart}>Add to Cart</button>
</article>
  )
}

export default Product