import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Data/Product';
import './ProductInfo.scss'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

const ProductInfo = () => {
    const {name} = useParams();
    const product = Products.find((prod)=>prod.name.toLowerCase() === name.toLowerCase())
    console.log(product)

    const [mainImage, setMainImage] = useState(0)
  return (
    <div className='productinfo'>
        {/* <h2>{product.name}</h2>
        <img src={product.image} alt =''/>
        <p>{product.description}</p> */}
        <div className="left">
          <div className="main-img">
            <img src={product.image[mainImage]} alt="Image_0" />
          </div>
          <div className="secondary-img">
            <img src={product.image[0]} alt="Image_0" onClick={()=>setMainImage(0)}/>
            <img src={product.image[1]} alt="Image_1" onClick={()=>setMainImage(1)}/>
            <img src={product.image[2]} alt="Image_2" onClick={()=>setMainImage(2)}/>
            <img src={product.image[3]} alt="Image_3" onClick={()=>setMainImage(3)}/>
          </div>
        </div>
        <div className="right">
          <h2>{product.name}</h2>
          <div className='ratings'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar />
            <FaStarHalfAlt/>
            ({product.rating})
          </div>
          <p className='desc'>{product.description}</p>
          <div className='price'>
            <p>₹ {product.price}</p>
            <p>₹ {product.offerPrice}</p>
          </div>
          <div className='btn'>
            <button>Add To Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
    </div>
  )
}

export default ProductInfo