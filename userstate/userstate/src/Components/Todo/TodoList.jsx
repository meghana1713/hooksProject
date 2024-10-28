import React from 'react'

const TodoList = ({todo,handleToggle}) => {
   
  return (
    
    <>
    {todo.map((item)=>{
        const {title,id,status}=item// we can acesss using status or item.status this is called object destructuring
    return (
        <li key={item.id}>
          {item.title}-{item.status? "completed":"Not Compled"} 
          <button onClick={()=>handleToggle(id)}>Toggle></button>
          </li>
        );
    })
}</>
  )
}

export default TodoList
