import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context/AuthContextProvider';
import style from "./Navbar.module.css";

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
const {isAuth,login,logout} = useGlobalContext()


  return (
    <div style={{display:"flex",gap:"10px"}}>
      {links.map((link)=>{
       return (<NavLink  to={link.path} key={link.path} className={({isActive})=>{
        // console.log(isActive);
        
        return isActive ? style.activeStyle:style.defaultStyle ;
       }}>{link.text}</NavLink>  // is similar to <a href="">text</a> here href is same as to as we dont  have id we yse key ={links.path} which is unique for each individual elements.
           ); })}
    <p>User Logged IN:{isAuth ? "Yes":"No"}</p>
    {isAuth ? (<button onClick={logout}>Logout</button>):(<button onClick={login}>login</button>)}

    </div>
  )
}

export default Navbar
