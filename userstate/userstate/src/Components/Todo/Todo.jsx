import React, { useState } from 'react'
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const Todo = () => {
    const [text, setText]=useState("");
    const [todo , setTodo]=useState([])// here todo is an array which stores the todo list values which are entered in input nad clicked on add button
 function handleChange(event){
    setText(event.target.value)// getting the value which is entered iin input andd storing by useing settext fn we are updating value in text from its default which given empty string
 }
  
 const handleAddTodo=()=>{
    const newitem ={
    title:text,
    status:false,
    id:Date.now()+Math.ramdom(),
    };
    const todoAfterItemAddition=[...todo,newitem]
    setTodo(todoAfterItemAddition); //update the todo array with inputs currnet and old entered and added inputs 
    setText("")//re-setting the input value to empty string to enter another text 
 }
 function handleToggle(id){
  const todosAfterUpdation=todo.map((item)=>{
    item.id===id ? {...todo, status:!item.status}:item;
   })
   setTodo(todosAfterUpdation);
 }
    return (
    <div>
      <div>
        <AddTodo text={text} handleAddTodo={handleAddTodo} handleChange={handleChange}/>
      </div>
      <ul>
     
<TodoList todo={todo} handleToggle={handleToggle} />
      </ul>
    </div>
  )
}

export default Todo
