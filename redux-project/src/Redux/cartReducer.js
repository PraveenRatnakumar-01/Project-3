import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [], cartCount: 0, wishList: [], totalOrders: 0
}

const cartSlice = createSlice({
    name:"Cart", initialState,
    reducers: {
        incrementCount: (state) => {
            state.cartCount += 1
         },
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
         },
        addToWishlist: () => { },
        placeOrder: () => { }
    }
})

export const { incrementCount,addToCart, addToWishlist, placeOrder } = cartSlice.actions
export default cartSlice.reducer;