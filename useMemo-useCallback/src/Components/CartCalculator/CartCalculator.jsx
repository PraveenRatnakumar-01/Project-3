import React, { useState, useMemo } from 'react'

const CartCalculator = () => {

const [cartItems, setCartItems]= useState([])
//console.log("My Cart === ", cartItems);

//If total price is below 300(10% discount), 300-600(15%), above 1000(20%)

const totalPrice = useMemo(()=>{
  return cartItems.reduce((acc,item)=>acc+item.price, 0)
},[cartItems])

const discountPrice = useMemo(()=>{
  if(totalPrice<300){
    return totalPrice*0.9;
  }
  else if(totalPrice>=300 && totalPrice<1000){
    return totalPrice*0.85;
  }
  else{
    return totalPrice*0.8;
  }
},[cartItems])

/*let discount=0;
if(totalPrice<300){
  discount= 0.1;
}
else if(totalPrice>=300 && totalPrice<1000){
  discount= 0.15;
}
else{
  discount=0.2;
}*/

  return (
    <div>
        <h2>My Cart</h2>
        <div>
            {cartItems.map( (item)=> <p>Name -- {item.name} | Price -- {item.price}</p>)}
        </div>
        <button onClick={()=>{setCartItems([...cartItems, {id:1, name:"Mango", price: 80}])}}>Add Mango</button>
        <button onClick={()=>{setCartItems([...cartItems, {id:2, name:"Apple", price: 200}])}}>Add Apple</button>
        <button onClick={()=>{setCartItems([...cartItems, {id:3, name:"Orange", price: 120}])}}>Add Orange</button>
        <p>Total Price: ₹{totalPrice}</p>
        <p>Discount Price: ₹{discountPrice}</p>
    </div>
  )
}

export default CartCalculator