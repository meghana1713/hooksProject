import React ,{useState} from "react"
// Example:-1
// const App = () => {
//   const [count, setCount] = useState(0)
//   function handleClick(){
//     setCount(count + 1);
//   }
//   console.log(" re-renders component", count )
//     return (
//    <button onClick={handleClick}>Clicked {count} times</button>
//   )
// }

// export default App

//Example:-2

// const App = () => {
//   const [count, setCount] = useState(0)// 0 is intial value for count

//   function handleClick(){
//     setCount(count + 1);//here count value changed by this special function setCount this function will exceted where we called {handleClick} in line no:36
//       }
//    return (
//     <div>
//       <h1>Two buttons will be updated its value or text will be at a time by using this useState Example </h1>
//    <MyBotton count={count} handleClick={handleClick}/>
//     {/* here we are passing aruguments in the form of props to MyButton child component  and prop name and is value name is same*/}
//    <MyBotton count={count} handleClick={handleClick} />
//     </div>
//    )
// }
  
// function MyBotton({count,handleClick}){//here MyButton recieving count as argumrnts as it s a prop we need to take in {} formate only


//       return (
//     <button onClick={handleClick}>Clicked {count} times</button>
//     )
// }

// export default App

//example-3
import React from "react";
import Todo from "./Components/Todo/Todo";

const App = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;
