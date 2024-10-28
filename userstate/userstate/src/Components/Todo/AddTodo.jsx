import React from 'react'

const AddTodo = () => {
  return (
   <>
   <input type="text" onChange={handleChange}/>
   <button onClick={handleAddTodo}>Add</button>
   </>
  )
}

export default AddTodo
