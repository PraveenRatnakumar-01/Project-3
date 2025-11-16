import React from 'react'
import Navbar from '../NavBar/NavBar'
import { ThemeProvider } from '../../Context/ThemeContext'

const AboutPage = () => {
  return (
     <ThemeProvider>
        <Navbar/>
        AboutPage
    </ThemeProvider>   
  )
}

export default AboutPage