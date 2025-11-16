import React from 'react'
import {useSelector} from 'react-redux'
import Products from '../Data/Product'
import './MyCart.scss'
import {HashLink} from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { decrementCount } from '../../redux/cartReducer'
import { incrementCount } from '../../redux/cartReducer'

const MyCart = () => {
    const dispatch = useDispatch()
    const {cartItems, cartCount} = useSelector((state)=>state.Cart)
    //console.log("Cart Items in Cart Page ==",cartItems)

    const cart = cartItems.map(item =>{
        const product = Products.find(prod => prod.id === item.id)
        return{
            ...product, count:item.count
        }
    })
    console.log(cart)

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
                    <td><img src={item.image} alt="image" /></td>
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
                    <td>❌</td>
                </tr>
                ) )}
            </tbody>
            <tfoot>
                {cart.map((item,index)=>(
                <tr key={index}>
                    <td>Total: {item.offerPrice * item.count}</td>
                    <td>Saved: {item.price * item.count - item.offerPrice * item.count}</td>
                </tr>
                ) )}
            </tfoot>
        </table>
    </div>
  )
}

export default MyCart