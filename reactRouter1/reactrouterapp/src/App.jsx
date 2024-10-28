import React from 'react'
import { Route, Routes } from 'react-router'
import Cart from './Components/Cart'
import About from './Components/About'
import Home from './Components/Home'
import Users from './Components/Users'
import SingleUserPage from './Components/SingleUserPage'
import Navbar from './Components/Navbar'

const App = () => {
  return (
<>
<Navbar/>
<Routes>
    <Route path="/" element = {<Home/>}/> 
    <Route path="/about" element = {<About/>}/>
    <Route path="/cart" element = {<Cart/>}/>
    <Route path="/users" element = {<Users/>}/>
    <Route path="/users/:id" element = {<SingleUserPage/>}/>



   </Routes>
</>
  )
}

export default App

