import React, { createContext, useContext, useState } from "react";
export const AuthContext =createContext();
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

 
 const AuthContextProvider = ({children}) => {
    const [isAuth ,setIsAuth]= useState(true);
    const login = () =>{
        setIsAuth(true);
        toast("logged in");
    }
    const logout = () =>{
        setIsAuth(false); 
        toast("logged out")
    }
   return (
   <AuthContext.Provider value={{isAuth,login,logout}}>
    {children}
   </AuthContext.Provider>
   )
 };
 export const useGlobalContext = () =>{
    return useContext(AuthContext); //  you can use the useContext hook to get the context values in any component so instead of writting usecontext hook in all components wherever we get the context values in any component .
 } //useGlobalContext is not an inbuilt function in React. It is a custom hook that some developers create to simplify the process of using useContext for accessing global context values and import this fn in component wher ewe want to use context value.
 
 export default AuthContextProvider
  