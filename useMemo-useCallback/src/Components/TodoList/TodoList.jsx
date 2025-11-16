import React, { useCallback, useState } from 'react'

/* const TodoItem =({item})=>{
    console.log("Items rendered");
    return(
        <li>
             {item}
        </li>
    )
}*/

const TodoItem =React.memo(({item, remove})=>{
    console.log("Items rendered");
    return(
        <li>
            {item}
            <button onClick={()=>remove(item)}>X</button>
        </li>
        
    )
})

const TodoList = () => {

    const [input, setInput] = useState("")
    const [todos, setTodos] = useState(["Learn React","Practice Hooks"])
    /*console.log("My task ===", todos)

    const addTodo =()=>{
        if(input.trim !==""){
            setTodos((prev)=>[...prev,input])
        }
    }*/

    const addTodo =useCallback(()=>{
        if(input.trim !==""){
            setTodos((prev)=>[...prev,input])
            setInput("")
        }
    },[input])
    const removeTodo = useCallback((itemToRemove)=>{
        setTodos((prev)=>prev.filter((item)=> item != itemToRemove))
    },[])
    
  return (
    <div>
        <h1>To Do List</h1>
        <div>
            <input type="text" placeholder='Add Task' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((item, index)=>
                <TodoItem key={index} item={item} remove={removeTodo}/>)}
            </ul>
        </div>
    </div>
  )
}

export default TodoList