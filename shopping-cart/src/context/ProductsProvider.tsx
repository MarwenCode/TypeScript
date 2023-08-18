import { createContext, ReactElement, useState, useEffect, ReactNode  } from "react";

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initState: ProductType[] = []

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext(initContextState);

interface ProductProviderProps {
    children: ReactNode
}

export const ProductsProvider= ({children}: ProductProviderProps ) => {
    const [products, setProducts] = useState(initState);

    useEffect(() => {
        const fetchProducts = async(): Promise<ProductType[]>  => {
            const data = await fetch('http://localhost:3500/products')
            .then((response) =>{
                return response.json()
            })
            .catch(error => {
                console.log(error)
            });
            return data
            
        }
        fetchProducts().then(products => setProducts(products));
     
    }, []);

    


    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}