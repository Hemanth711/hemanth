import React, { useState } from 'react'
import useList from './components/custom-hooks/useList'
import './Style.css'

export default function App() {
  const {list,push,pull} = useList()
  const [todo,setTodo] = useState("")
  const [error,setError] = useState(false)
  const onsubmithandler=(e)=>{
    if(todo.length===0){
      setError(true)
    }
    e.preventDefault()
    push(todo)
   setTodo("")
  }
  
  return (
    <header>
      <form onSubmit={onsubmithandler}>
        {error?
        <label>Please type something</label>:""}
        <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
        

        <button type='submit'>Add Todo</button>
      </form>
      <h3 >
        {list.map((listItem,index)=>{
          return(
          <div key={index}>
          <li>{listItem}</li>
          <button onClick={()=> {pull(index)}}>Delete</button>
          </div>
          )
        })}
      </h3>
    </header>
  )
      }


