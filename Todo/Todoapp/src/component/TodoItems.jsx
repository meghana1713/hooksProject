import React from 'react'

const TodoItems = ({id,title, status,handleToggle,handleDelete}) => {
  function handleUpdate(){
    handleToggle(id,)
  }
    return (
    <div>
      <p>{title}</p>
      <p>{status ? "completed" : "not completed"}</p>
      <button onClick={()=>{
        handleDelete(id)
      }}>Delete</button>
      <button onClick={()=>{
        handleUpdate()
      }} >Toggle</button>
    </div>
  )
}

export default TodoItems
