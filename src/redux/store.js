import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlices";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});
