import React, { useReducer } from 'react'
import products from '../../Data/products'
import './Products.css'

//initial states for cart values
const initialState= {quantity:0}

//reducer function
function reducer(state, action){
    switch(action.type){
        case 'Add to Cart':
            return {quantity: 1}
        case 'Increment':
            return {quantity: state.quantity+1}
        case 'Decrement':
            return {quantity: state.quantity-1}      
    }

}

const Products = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='container'>
        <h2>Products</h2>
        <div className='products'>
            {products.map((item)=>(
                <div key={item.id} className='item'>
                    <img src={item.image} alt="Item image" />
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <div className='btn'>
                        <button className='button'>Buy Now</button>
                        {state.quantity === 0 ?(<button onClick={()=>dispatch({type:'Add to Cart'})}>Add to Cart</button>
                        ): (<div>
                                <button onClick={()=>dispatch({type:'Decrement'})}>-</button>
                                <span>{state.quantity}</span>
                                <button onClick={()=>dispatch({type:'Increment'})}>+</button>
                            </div>
                        )
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products