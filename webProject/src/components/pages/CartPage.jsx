import React from 'react'
import MyCart from '../MyCart/MyCart'
import Navbar from '../NavBar/NavBar'
import { ThemeProvider } from '../../Context/ThemeContext'

const CartPage = () => {
  return (
    <ThemeProvider>
        <Navbar/>
        <MyCart/>
    </ThemeProvider> 
  )
}

export default CartPage