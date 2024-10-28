// Example-1

// import React , {useRef} from 'react'

// const App = () => {
//   const inputRef = useRef(null);
//   const handleFocus=()=>{
//     // console.log(inputRef);
//     inputRef.current.focus();
//   }
//   return (
//     <div>
//       <input type="text"  ref={inputRef}  />
//       <button onClick={handleFocus}>focus the input means cursor should go inside the input field</button>
//     </div>
//   )
// }

// export default App

//Example-2
// import React, { useState } from 'react'

// const App = () => {
//   const [flag,setFlag]=useState(false);
//   const [value, setValue]=useState(0);
//   function handleCount(){
//     setValue(value+1);
//     console.log(value) 
//   }
//     return (
//    <>
//    <h1>count:{value}</h1>
//    <button onClick={handleCount}>click</button>
//    <button onClick={()=>{
//     setFlag(!flag);
//    }}>{flag ? "Start":"stop"}</button>

//    {/* // {flag ? "Start":"stop"} as it is an expression we are writting inside the {} brackets */}
//    </>
//   )
// }

// export default App;

// Exapmle-4:This is an example for how single useRef object we can focus in  multiple input fileds i.e we are re-using useref for multiple input fields
import React, { useRef } from 'react'

const App = () => {
  const inputref=useRef([]);
  const handleButton = ()=>{

    inputref.current[2].focus();
  }
  console.log(inputref);

  return (
    <div>
      <input type="text" style={{width:"20px"}} id="inputTag1" ref={(element)=>{
        return inputref.current[0]=element;
      }}/>
      {/* whatever the value we enter in input field will be store in element */}
      <input type="text" style={{width:"20px"}} id="inputTag2"  ref={(element)=>{
        return inputref.current[1]=element;
      }}/>
      <input type="text" style={{width:"20px"}} id="inputTag3"  ref={(element)=>{
        return inputref.current[2]=element;
      }}/>
      <input type="text" style={{width:"20px"}} id="inputTag4"  ref={(element)=>{
        return inputref.current[3]=element;
      }}/>
<button onClick={handleButton}>click</button>
    </div>
  )
}

export default App
