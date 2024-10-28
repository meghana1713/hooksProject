import React, {useState} from 'react'

const AddTodo = ({handleAdd}) => {
  const [inputValue,setinputValue] = useState("");

  function handleClick(){
    handleAdd(inputValue);
  }
  return (
  <>
  <input type="text" value={inputValue} onChange={(event)=>{
    setinputValue(event.target.value)

  }} />
  <button onClick={handleClick}>Add</button>
  </>
  )
}

export default AddTodo
