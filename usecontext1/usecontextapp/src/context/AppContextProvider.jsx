import { createContext,useState } from "react";

export const AppContext = createContext();// it returns an object inside that object we have Provider as a key we treate this object as component as it Receives Props and Renders Children: It wraps around other components (children) that you place inside it that's y we wirte inside<> tag
console.log(AppContext);

// 1. we call createContext() which return a component to pass the date to its children we can store the data in provider in side a component and pass to its children components wherever we want without passing props in hierarchical like we ddo in prop drilling 

// instead of writting inside the AppContextProvider component this entire code in main.jsx component but it is not clean code

export const AppContextProvider = (props) =>{
    const [isAuth,setIsAuth] =useState(false);
    const login = () =>{
        setIsAuth(true);
    }
    const logout = () =>{
        setIsAuth(false);
    }
    return(
        <AppContext.Provider value={{isAuth,login,logout}}> 
        {/* // for value={}//You use these braces whenever you want to include a JavaScript variable, function, or object in your JSX // {isAuth,login,logout} . In JavaScript, when you want to pass multiple values (like state variables and functions) as a single prop, you need to use an object. */}
         {props.children}
        </AppContext.Provider>
    )
}