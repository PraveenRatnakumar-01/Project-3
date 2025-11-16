import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, addToCart } from '../../Redux/cartReducer'

const Cart = () => {

    const dispatch = useDispatch()
    const {cartCount, cartItems} = useSelector((state)=>state.Cart)

    console.log("MyCart count == ", cartCount)
    console.log("Cart Items == ", cartItems)
    //console.log("wishlistCount == ", wishlistCount)

  return (
    <div>
        <h1>Cart Page</h1>
        <button onClick={()=> dispatch(incrementCount())}>Increase Cart Count</button>
        <button onClick={()=> dispatch(addToCart('Mobile Phone'))}>Add To Cart</button>
        {/* <button>Add To Wishlist</button> */}
    </div>
  )
}

export default Cart