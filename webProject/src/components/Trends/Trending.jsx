import React, { useState } from 'react'
import './Trending.scss'
import ProductCard from '../ProductCard/ProductCard'
// import Tshirt from '../../assets/Products/Tshirt.png'
// import Cap from '../../assets/Products/Cap.png'
// import Glass from '../../assets/Products/Glass.png'
import Products from '../Data/Product.js'
// eslint-disable-next-line no-unused-vars
import {motion, AnimatePresence} from 'framer-motion';
// import {useSelector} from 'react-redux'

const Trending = () => {

    // const {cartItems, cartCount} = useSelector((state)=>state.Cart);
    // console.log("My cart === ", cartItems)
    // console.log(cartCount)

    const [selectedCategory, setSelectedCategory] = useState("New Arrivals")
    const Categories = ["New Arrivals", "Best Seller", "Summer Collections", "Accessories",
        "Essentials"];

    const filteredProducts = Products.filter((item)=>
        item.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className='container'>
            <h3>Trending collections</h3>
            <h1>Our <span>Trending</span> Models</h1>
            {/* Category tabs */}
            <div className="options">
                {/* <span className='active'>New arivals</span>
                <span>Best seller</span>
                <span>Summer collections</span>
                <span>Accessories</span>
                <span>Essentials</span> */}
                { Categories.map((category, index)=>(
                    <span key={index}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={()=>setSelectedCategory(category)}>
                        {category}</span>
                ))}
            </div>
            {/* <div className="products">
                <ProductCard name="Tshirts" image={Tshirt} Actualprice={799} Offerprice={699}/>
                <ProductCard name="Caps" image={Cap} Actualprice={599} Offerprice={549}/>
                <ProductCard name="Glasses" image={Glass} Actualprice={999} Offerprice={799}/>
            </div> */}

         <div className="products" id='Products'>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory} initial={{ opacity: 0, y: 30, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.9 }} 
            transition={{ duration: 0.4, ease: "easeOut" }} className="product-grid">
            {filteredProducts.map((item, index) => (
              <motion.div
                key={index} initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.05 }}>

                <ProductCard id={item.id} name={item.name} image={item.image}
                  Actualprice={item.price} Offerprice={item.offerPrice}/>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Trending;