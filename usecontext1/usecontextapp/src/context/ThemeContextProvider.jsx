import { createContext, useState } from "react";

export const ThemeContext = createContext();//1. creating a main component-where we store the data
//2. provider-where we access or pass the data  
export const ThemeContextProvider = (props)=>{
    const [theme,setTheme] = useState("dark");
    const ToggleTheme = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return(
        <ThemeContext.Provider value={{theme,ToggleTheme}}> /// value is default prop to the commponent which is created by createContext()
        {props.children} 
        {/* // here we are accessing <App></App> component */}
        
        </ThemeContext.Provider>
    )
   
}