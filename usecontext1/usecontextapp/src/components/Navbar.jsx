import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider';

const Navbar = () => {
 const {isAuth,login,logout}= useContext(AppContext); // useContext(AppContext) returns the value passed to AppContext.Provider and value=object as we created inside {} brackets so here const {isAuth,login,logout} // destructuring = value  which pass an object 
 // in useContext() we need to mention from which context(i.e the component which is created by using useContext()) we are getting the data // here {isAuth,login,logout}  we destructuring  as wegot as props in value this are sent as an object;
  return (
    <div style={{display:"flex",justifyContent:"space-between" , gap:"10px"}}>
      <h5>Is User Authenticated : {isAuth ? "yes" :"no"}</h5>
    {!isAuth && <button onClick={login}>login</button>}
    {isAuth && <button onClick={logout}>logout</button>}    
      {/* //shorthand notations for && operator  */}
    </div>
  );
};

export default Navbar;
