import { createContext, ReactElement, useState, useEffect, ReactNode  } from "react";

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

//const initState: ProductType[] = []
const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

export const ProductsContext = createContext(initContextState);

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