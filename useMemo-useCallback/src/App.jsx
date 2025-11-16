import React, { useState, useMemo, useCallback } from 'react'
import MemoComp from './Components/Memocomp'
import SearchProduct from './Components/SearchProduct/SearchProduct'
import CartCalculator from './Components/CartCalculator/CartCalculator'
import CallbackComp from './Components/CallbackComp/CallbackComp'
import TodoList from './Components/TodoList/TodoList'
import Usereducer from './Components/Usereducer/Usereducer'
import Products from './Components/Products/Products'
import CustomHooks from './Components/CustomHooks/CustomHooks'

const App = () => {
  
const [count, setCount] = useState(0)
const [newCount, setNewCount] = useState(5)

//const user= {"name":"John","isAdmin":true}  //This causes both components to be rendered since the reference value of objects change on each render.
//To combat this, we use,
const user= useMemo(()=>{
  return {"name":"John ","isAdmin":true,"CartCount":newCount}
},[newCount])

const onHandleClick=()=>{
  setCount(count+1)
}
const onButtonClick=()=>{
  setNewCount(newCount+10)
}
console.log("App Components Rendered")

const onBtnclick= useCallback(()=>{
  console.log("Button clicked")
},[])

  return (
    <div>
      <MemoComp count={newCount} User={user}/>
      <hr/>
      <h1>Count: {count}</h1>
      <h3>Cart Count: {newCount}</h3>
      <button onClick={onHandleClick}>Increment</button>
      <button onClick={onButtonClick}>Add new value</button>
      <hr/>
      {/* <SearchProduct/> <hr /> */}
      {/* <CartCalculator /> <hr /> */}
      <CallbackComp handleclick={onBtnclick} newcount={newCount}/> <hr />
      {/* <TodoList/> <hr /> */}
      {/* <Usereducer/> */}
      <Products/> <hr />
      <CustomHooks/>
    </div>
  )
}

export default App