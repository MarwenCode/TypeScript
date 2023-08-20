import { useMemo, useReducer, createContext, ReactElement } from "react";

type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = {
     cart: CartItemType[]
    
    };

type Action =
  | {
      payload: { sku: any; name: any; price: any };
      type: "ADD" | "REMOVE" | "QUANTITY" | "SUBMIT";
    }
  | { type: "PAYLOAD"; payload: string };

const reducer = ( state: CartStateType, action: Action): CartStateType | undefined => {
  switch (action.type) {
    case "ADD": {
      const { sku, name, price } = action.payload;
     // Access the current cart array from the state
     const currentCart = state.cart;

     // Filter out items with the same SKU as the one being added
     const filteredCart: CartItemType[] = currentCart.filter(item => item.sku !== sku);

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      const qty: number = itemExists ? itemExists.qty + 1 : 1;

      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
    }
  }
};
