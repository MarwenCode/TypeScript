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


    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}