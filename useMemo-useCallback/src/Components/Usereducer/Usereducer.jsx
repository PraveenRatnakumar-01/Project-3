import React, { useReducer } from 'react'

const initial_State= {count:0, cartitems:5}
function reducer(state, action){      //state= {count:0, cartitems=5}, action={type:"increment"}
  switch(action.type){
    case 'increment':
      return {count: state.count +1, cartitems: 5}
    case 'decrement':
      return {count: state.count -1, cartitems: 5}
    case 'reset':
      return {count: 0, cartitems: 5}
  }
}

const Usereducer = () => {
    //const [count, setCount] = useState(0)
    const [state, dispatch]= useReducer(reducer,initial_State)

  return (
    <div>
        <h1>UseReducer Hook</h1>
        <p>My Reducer count: {state.count}</p>
        <p>Cart Items: {state.cartitems}</p>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Usereducer