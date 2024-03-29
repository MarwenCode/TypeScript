
import React, { useMemo, useReducer, createContext, ReactElement, ReactNode, Reducer, Dispatch } from "react";

//reducer

export type CartItemType = {
  some: any;
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = {
     cart: CartItemType[],
    //  totalItems: number,
    //  totalPrice: string,
    
    };

const initCartState: CartStateType = { 
    cart: [],
    // totalItems: 0,
    // totalPrice: '',


}

export type Action =
  | {
      payload: { sku: string; name: string; price: number, qty: number  };
      type: "ADD" | "REMOVE" | "QUANTITY" | "SUBMIT" | "Increase" | "Decrease"
    }
  // | { type: "PAYLOAD"; payload: string };

  const reducer: Reducer<CartStateType, Action> = (state, action) => {
    const currentCart = state.cart;
  switch (action.type) {
    case "ADD": {
      const { sku, name, price } = action.payload;
     // Access the current cart array from the state
     

     // Filter out items with the same SKU as the one being added
     const filteredCart: CartItemType[] = currentCart.filter(item => item.sku !== sku);

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      const qty: number = itemExists ? itemExists.qty + 1 : 1;

      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
    }

    case "REMOVE": {

        const { sku } = action.payload;
        const filteredCart: CartItemType[] = currentCart.filter(item => item.sku !== sku);
        
        return {...state, cart: [...filteredCart]}


    }
    case "QUANTITY": {
        if (!action.payload) {
            throw new Error('action.payload missing in QUANTITY action')
        }

        const { sku, qty } = action.payload

        const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

        if (!itemExists) {
            throw new Error('Item must exist in order to update quantity')
        }

        const updatedItem: CartItemType = { ...itemExists, qty }

        const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

        return { ...state, cart: [...filteredCart, updatedItem] }
    }
    case "Increase": {
      const skuToIncrease = action.payload; // action.payload should be the SKU string
    
      const increasedCart = currentCart.map((cartItem) => {
        if (cartItem.sku === skuToIncrease) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
    
      return { ...state, cart: increasedCart };
    }
    case "Decrease": {
      const skuToDecrease = action.payload;
      
      const updatedCart = currentCart.map((cartItem) => {
        if (cartItem.sku === skuToDecrease) {
          if (cartItem.qty > 0) {
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
        }
        return cartItem;
      });
    
      return { ...state, cart: updatedCart };
    }
    
    
    
    case "SUBMIT": {
      return { ...state, cart: [] }
  }

    default:
      throw new Error('Unidentified reducer action type')
  }
};


//context
interface CartProviderProps {
    children: ReactNode;
}

// export const CartContext = React.createContext();

export const CartContext = React.createContext<{
  cart: CartItemType[];
  totalItems: number;
  totalPrice: string;
  dispatch: Dispatch<Action>;
} | undefined>(undefined);



export const CartProvider = ({children}: CartProviderProps) => {

    const [state, dispatch] = useReducer(reducer, initCartState);


    const totalItems = state.cart.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.qty
    }, 0)

    const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        state.cart.reduce((previousValue, cartItem) => {
            return previousValue + (cartItem.qty * cartItem.price)
        }, 0)
    )




    return (
        <CartContext.Provider
          value={{
            cart: state.cart,
            totalItems: totalItems,
            totalPrice: totalPrice,
            dispatch: dispatch,
            
          }}>
          {children}
        </CartContext.Provider>
      );

}





