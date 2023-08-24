import React, {useContext} from 'react';
import { CartContext } from '../context/CartProvider';
import  { ProductsContext} from '../context/ProductsProvider';
import Product from './Product';

const ProductList = () => {
  const { dispatch } = useContext(CartContext);

  const { products } = useContext(ProductsContext)
  return (
    <main className="main main--products">
          {products?.map((product => (
            <Product

            key={product.sku}
                    product={product}
                    dispatch={dispatch}
            
            
            
            
            />



          )))}

          {!products && (<p>Loading...</p>)}
        </main>
  )
}

export default ProductList