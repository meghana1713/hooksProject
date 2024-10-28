// import React,{useEffect, useState} from 'react'

// const Count = () => {
//        const [count, setCount] = useState(0);
//        const [data ,setData] = useState([]);//data is any array intially it is an empty array we update its value by using setData fn
//        useEffect(()=>{ // what ever the task we do with database we usually write in promise that will be again write in useeffect means useEffect will handle the code or tas or functionality which is related  or connected to database
//         const fetching = async()=>{
//             try{
//                 const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//                 const data=await response.json();
//                 setData(data);// here we are updating dataArr value with data in line 10
//                 console.log(data);
//             }
//             catch(error){
//                 console.log(error);
//             }
//         };
//         fetching();

//        },[]);// it takes 2 aruguments first one a function in this we can write any promise like fetch calls useeffect will not handled by js it handle by browser so js will not exceute useeffect as per js as it execute line by line it excute useeffect lastly after rendering(i.e component creation) the component that is all lines will execute in component then at last useeffect will execute and second one is [] empty array it is called dependence array  in this array if we mention any value for every updation of that value the data will be fetch if it is empty array which is used to aviod multiple fetch calls every time we render the component by clicking it will only fetch the data at first time of component render

//   return (
//     <div>
//       {count}
//       <Button setCount={setCount} count={count}/>
//       {
//         data.map((item)=>{
//             return <p>{item.title}</p>
//         })
//       }
//     </div>
//   )
// }
// function Button({count,setCount}){
//     return <button onClick={()=>setCount(count+1)}>Inc</button> // normally we give a fn name and define it outside the return of the component inn side that we call setCount fn but here only we defining arrow fn and inside that we are calling setCount method
// }
// export default Count

import React, { useEffect } from 'react'

const Count = () => {
   
    useEffect(()=>{
  const  id=  setInterval(()=>{
            console.log(Date.now());
        },1000);
       return ()=>{
            clearInterval(id);// it will clear the interval when the component is unmount(remove or delete)
        }//cleanup function it calls automatically
    },[]);
  return (
    <div>
      count
    </div>
  )
}

export default Count;



// Reasons to Return a Cleanup Function in useEffect:
// Prevent Memory Leaks: If you set up an interval (like with setInterval) and don’t clear it when the component unmounts, the interval will continue to run in the background even after the component is gone. This can lead to memory leaks, as the JavaScript engine keeps references to the function and its context.

// Stop Background Processes: For timers and intervals, you want to ensure they are stopped when the component is no longer in use. Returning a cleanup function allows you to call clearInterval or clearTimeout, which stops the timer or interval.

// Consistency: When the dependencies of the useEffect change, React will clean up the previous effect (by calling the cleanup function) before running the new effect. This ensures that there’s no overlap of effects and helps maintain a consistent state.