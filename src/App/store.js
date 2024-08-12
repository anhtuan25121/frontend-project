import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import wishlistSlice from "./wishlistSlice";
const store = configureStore({
    reducer: {
      products: productReducer,
      cart: cartReducer,
      wishlist: wishlistSlice,
    },
    preloadedState: {
      cart: {
          items: JSON.parse(localStorage.getItem('cartItems')) || [],
      },
  },
  });
  
  export default store;
  