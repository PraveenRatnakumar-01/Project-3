import React from 'react'
import MyCart from '../MyCart/MyCart'
import Navbar from '../NavBar/NavBar'
import { ThemeProvider } from '../../Context/ThemeContext'
import Footer from '../Footer/Footer'

const CartPage = () => {
  return (
    <ThemeProvider>
        <Navbar/>
        <MyCart/>
        <Footer/>
    </ThemeProvider> 
  )
}

export default CartPage