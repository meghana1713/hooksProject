import React, { useContext } from 'react'
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContextProvider';

const App = () => {
  //3. to access or use data from context we use useContext()
  const {theme,ToggleTheme} = useContext(ThemeContext);//destructuring theme
  return (
    <div className="App" style={{background:theme === "dark"? "black" :"white",
      color:theme === "dark" ? "white" : "black",
      padding:"10px",
    }}>
      <Navbar/>
      <button onClick={ToggleTheme}>Toggle theme</button>
    </div>
  )
}

export default App;
