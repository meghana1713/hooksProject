import React, { useState,useEffect } from 'react'
import AddTodo from './AddTodo'
import TodoItems from './TodoItems';

const Todos = () => {
  const [todo,setTodo]  =  useState([]);
  const [status, setStatus] = useState(false);
const [loading,setLoading] = useState(false);

  // we can keep useState([]||"") that means in todo variable the value should be text or array
    const handleAdd = (inputValue)=>{
      const newTodoItem={
        title : inputValue,
        status : false
      };
      let result=fetch("http://localhost:3000/todos" ,{
        method: "POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(newTodoItem),
      });
      result.then(()=>{
setStatus(!status);
      })
      result.catch((error)=>{
        console.log(error);
      })
    }; 
    //get----- read from db.json
    async function fetchAndUpData(){
      try{
        setLoading(true);
      let response= await fetch("http://localhost:3000/todos");
      let data = await response.json();
      setTodo(data);
      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  }
  //delete
  const handleDelete = () =>{
    let result = fetch(`http://localhost:3000/todos/${id}`,{
       method:"DELETE"
    });
    result.then(()=>{
    setStatus(!status);
    })

   
  }
  //update-patch for single change and put for all values
  const handleToggle=(id,body)=>{
    let result = fetch(`http://localhost:3000/todos/${id}`,{
      method:"PATCH", 
      headers:{"content-Type":"application/json" },
      body:JSON.stringify(body)
   });
   result.then(()=>{
   setStatus(!status);
   })
  }
  useEffect(()=>{ 
    fetchAndUpData();
  },[status])
  return (
    <>

    <AddTodo handleAdd={handleAdd}/>
    {loading ? (<h1>Loading.........</h1>):   ( {todo.map((item)=>{
      return(
        <TodoItems key={item.id} {...item} handleDelete={handleDelete}  handleToggle={handleToggle}/>
      )
    })})}
 
    </>
  )
}

export default Todos
