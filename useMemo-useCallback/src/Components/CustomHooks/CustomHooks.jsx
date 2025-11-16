import React from 'react'
//import {useState} from 'react'

/*const CustomHooks = () => {
    const [value, setValue]= useState({username:"",password:""})
    console.log("Username ===", value.username)
    console.log("Password ===", value.password)
  return (
    <div>
        <h1>CustomHooks</h1>
        <input type="text" placeholder='Enter Username!' name="username"
        value={value.username} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
        <input type="password" placeholder='Enter Password!' name="password"
        value={value.password} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
    </div>
  )
}*/

import {useForm} from '../../Hooks/useForm'

const CustomHooks = () => {
    const [form, onHandleChange]= useForm({Phone:"",Email:"",Username:"",Password:""})
    console.log("My form === ", form)

    return(
    <div>
        <h1>Custom Hooks</h1>
        <input type='number' placeholder='Enter Phone number!' name='Phone'
        value={form.Phone} onChange={onHandleChange} />
        <input type="email" placeholder='Enter email!' name="Email" 
        value={form.Email} onChange={onHandleChange}/>
        <input type="text" placeholder='Enter username!' name="Username" 
        value={form.Username} onChange={onHandleChange}/>
        <input type="password" placeholder='Enter password!' name="Password" 
        value={form.Password} onChange={onHandleChange}/>
    </div>
    )
}

export default CustomHooks