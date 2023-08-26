import React, { Dispatch, useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import { ProductsContext } from '../context/ProductsProvider';
import { CartItemType, Action } from '../context/CartProvider';
import Product from './Product';

const ProductList = () => {

  const { products } = useContext(ProductsContext);
  const { cart, dispatch, totalItems, totalPrice } = useContext(CartContext) as {
    cart: CartItemType[];
    totalItems: number;
    totalPrice: string;
    dispatch: Dispatch<Action>;
  };

  
  
  

  return (
    <main className="main main--products">
      {products?.map((product) => (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch} cart={cart}        />
      ))}
      {/* {!products && <p>Loading...</p>} */}
    </main>
  );
};

export default ProductList;
