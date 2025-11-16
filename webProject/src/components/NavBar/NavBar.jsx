import logo from "../../assets/logo.svg"
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import './NavBar.scss'
import { useState, useContext } from "react";
// eslint-disable-next-line no-unused-vars
import {motion, AnimatePresence} from 'framer-motion';
import { MdMenu } from "react-icons/md";
import { ThemeContext } from "../../Context/ThemeContext"
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdown, setDropdown]= useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext)
    // console.log("Dropdown ", dropdown)
    return (
        <div className={`Navbar ${theme}`}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlinks">
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <div className="dropdown" onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                <span>Products <IoIosArrowDown /> </span>
                <AnimatePresence>
                {dropdown && (
                    <motion.div className={`dropdown-menu ${theme}`} initial={{opacity:0, y:-100}}
                    animate={{opacity:1,y:0}} exit={{opacity:0, y:-100}} transition={{duration:0.3}}>
                        <span>Electronics</span>
                        <span>Clothing</span>
                        <span>Accessories</span>
                        <span>Groceries</span>
                    </motion.div>
                )}
                </AnimatePresence>
                </div>
                <span>Contact Us</span>
            </div>
            <div className="auth">
                <IoSearchOutline />
                <p> <FiUser />Account</p>
                <Link to='/cart'><IoMdCart className="carticon"/></Link>

                <span onClick={toggleTheme}>{theme == 'light' ? <MdOutlineDarkMode className="icon" /> :
                    <MdLightMode className="icon"/>}</span>
            </div>
            <div className="menu"><MdMenu className="icon"/></div>
        </div>
    )
}

export default Navbar