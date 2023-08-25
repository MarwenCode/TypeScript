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
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3500/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched data:', data); // Log the fetched data
                setProducts(data); // Assuming the fetched data structure has a "products" property
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts();
    }, []);
    
    

    


    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}