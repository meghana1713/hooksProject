import React from 'react'
import { NavLink } from 'react-router-dom'
const links=[{
    path:"/",text:"Home"
},
{
    path:"/about",text:"About"
},
{
    path:"/cart",text:"Cart"

},
{
    path:"/users",text:"Users"

}]

const Navbar = () => {
  const defaultStyle=
  {
    color:"black",
    TextDecoration:"none"
  };
  const activeStyle={
    color:"green",
    TextDecoration:"none"

  }
  return (
    <div style={{display:"flex",gap:"10px"}}>
      {links.map((link)=>{
       return (<NavLink  to={link.path} key={link.path} style={({isActive})=>{
        // console.log(isActive);
        
        return isActive ? activeStyle:defaultStyle ;
       }}>{link.text}</NavLink>  // is similar to <a href="">text</a> here href is same as to as we dont  have id we yse key ={links.path} which is unique for each individual elements.
           ); })}
    </div>
  )
}

export default Navbar
