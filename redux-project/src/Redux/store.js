import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import cartReducer from './cartReducer';

export const store = configureStore({
    reducer: {
        Auth: authReducer, Cart: cartReducer
    }
})
