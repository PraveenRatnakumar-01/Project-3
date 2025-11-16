import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login, Logout } from '../../Redux/authReducer'

const Button = () => {

  /*const authValues = useSelector((state)=> state.Auth)
  console.log("Auth == ", authValues)
  const cartValues = useSelector((state)=> state.Cart)
  console.log("Cart == ", cartValues)*/

  //Destructure
  const {userId, username, isAdmin} = useSelector((state)=> state.Auth)
  //console.log(isAdmin)

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=> dispatch(Login())}>Sign In</button>
      <button onClick={()=> dispatch(Logout())}>Log Out</button>
    </div>
  )
}

export default Button