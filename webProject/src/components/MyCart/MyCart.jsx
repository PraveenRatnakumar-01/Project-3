import React, { useState, useMemo } from 'react'
import {useSelector} from 'react-redux'
import Products from '../Data/Product'
import './MyCart.scss'
import {HashLink} from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { decrementCount } from '../../redux/cartReducer'
import { incrementCount } from '../../redux/cartReducer'
import Popup from '../Popup/Popup'

const MyCart = () => {
    const dispatch = useDispatch()
    const [popup, setPopup] = useState(false)
     const [removeItem,setRemoveItem] = useState(null)
    const {cartItems, cartCount} = useSelector((state)=>state.Cart)
    //console.log("Cart Items in Cart Page ==",cartItems)

    const cart = cartItems.map(item =>{
        const product = Products.find(prod => prod.id === item.id)
        return{
            ...product, count:item.count
        }
    })
    console.log(cart)

    const onRemove = (item) => {
        setPopup(true);
        setRemoveItem(item)
    }

    console.log("Remove Item ==", removeItem)

    // const totalActualPrice = cart.reduce((x,y)=>x + y.price * y.count, 0)
    // const totalOfferPrice = cart.reduce((x,y)=>x + y.offerPrice * y.count, 0)

    const totalActualPrice = useMemo(()=>{
        return cart.reduce((x,y)=>x + y.price * y.count, 0)
    },[cart])
    const totalOfferPrice = useMemo(()=>{
        return cart.reduce((x,y)=>x + y.offerPrice * y.count, 0)
    },[cart])

    if(cartCount === 0){
        return(
            <div className='emptycart'>
            <h2>Your Cart is Empty</h2>
            {/* <button className='button'>Purchase Now</button> */}
            <HashLink smooth to='/#Products' className='button'>Purchase Now</HashLink>
            </div>
        )
    }
    return (
    <div className='cartpage'>
        <h2>Your Cart</h2>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Actual Price</th>
                    <th>Offer Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item,index)=>(
                <tr key={index}>
                    <td><img src={item.image[0]} alt="image" /></td>
                    <td>{item.name}</td>
                    <td className='count'>
                        <div className='btns'>
                            <button onClick={()=>dispatch(decrementCount(item.id))}>-</button>
                            <p>{item.count}</p>
                            <button onClick={()=>dispatch(incrementCount(item.id))}>+</button>
                        </div>
                    </td>
                    <td>₹{item.price * item.count}</td>
                    <td>₹{item.offerPrice * item.count}</td>
                    <td onClick={()=>onRemove(item.id)} className='remove'>❌</td>
                </tr>
                ) )}
                <tr>
                    <td colSpan='3'></td>
                    <td>Total Price: ₹ {totalActualPrice}</td>
                    <td>Offer Price: ₹ {totalOfferPrice}</td>
                    <td>You Saved: ₹ {totalActualPrice - totalOfferPrice}</td>
                </tr>
                <tr>
                    <td colSpan='4'></td>
                    <td><button>Buy Now</button></td>
                    <td><button>Add Coupons</button></td>
                </tr>
            </tbody>
        </table>
        {popup && <Popup close={() => setPopup(false)}
                removeitem={removeItem}/>}
    </div>
  )
}

export default MyCart