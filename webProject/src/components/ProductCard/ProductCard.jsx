import React from 'react'
import './ProductCard.scss'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { addToCart } from '../../redux/cartReducer';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ id, name, image, Offerprice,Actualprice}) => {
    const dispatch= useDispatch()
    const {cartItems} = useSelector((state)=>state.Cart)
    const isInCart = cartItems.find(item=> item.id === id)

    return (
        <div className='product'>
                <div className='imgbox'>
                    <img src={image} alt="image" />
                </div>
                <div className='info'>
                    <p>{name}</p>
                    <span>
                        <p>₹{Offerprice}</p>
                        <p>₹{Actualprice}</p>
                    </span>
                </div>
                <div className='ratings'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar />
                    <FaStarHalfAlt/>
                </div>
                <div className='btns'>
                    <button className={isInCart? "disabled":""}
                    onClick={()=>dispatch(addToCart({"id":id,"name":name, count:1}))}>AddToCart</button>
                    <button>BuyNow</button>
                </div>
            </div>
    )
}

export default ProductCard