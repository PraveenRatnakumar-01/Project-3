import { useState } from "react"

export function useForm(initial_values){
  const[form, setForm]= useState(initial_values)
  const onHandleChange=(e)=>{
    const {name, value} = e.target
    setForm(prev=>({...prev,[name]:value}))
  }

  return [form, onHandleChange]
}