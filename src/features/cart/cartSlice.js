import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
   name: "cart", 
   initialState,
   reducers: {
       addItemToCart: () => {},
   },
});

export const{ addItemToCart } = cartSlice.actions;