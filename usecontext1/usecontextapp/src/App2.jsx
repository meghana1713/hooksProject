import React, { useState } from 'react'

const App2 = () => {
  return (
    <>
    <div>
      hello world
    </div> 
    <Card name="card">
        <Avatar  image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s"} 
        name={"panda photo"}/> 
        // chid component to Card component
    </Card>
    </>
  )
}

export default App2;

const Card = (props)=>{
    console.log(props);
    console.log(props.children);// in props object there will be a property called children and its value will be children component of a parent commponent
    const [flag,setFlag] = useState(true); 
      return(
        <>
         <div>
            Card 
        </div>
        {/* <div>{props.children}</div> // when we call like this {props.children} then only the child component will be created */}
        {flag ? <div>{props.children}</div>: <div>Login Page</div>}
        </>
     
    )
}

const Avatar = ({image,name})=>{ // Avatar which holds images and icons
    return(
<>
  <img src={image} alt=""/>
  <p>{name}</p>
  <p>This is avatar</p>
</>
    )
}

