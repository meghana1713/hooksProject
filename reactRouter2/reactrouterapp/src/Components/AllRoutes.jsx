import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Users from '../pages/Users'
import SingleUserPage from '../pages/SingleUserPage'
import ProtectedRouteComp from './ProtectedRouteComp'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'


const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element = {<Home/>}/> 
    <Route path="/about" element = {<About/>}/>
    <Route path="/cart" element = {<Cart/>}/>
    <Route path="/users" element = {<ProtectedRouteComp><Users/></ProtectedRouteComp>}/>
    <Route path="/users/:id" element = {<ProtectedRouteComp><SingleUserPage/></ProtectedRouteComp>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="*" element={<NotFound/>}/> 
     {/* when the url doesnt match with the paths in all the given rout components then it renders to the component in element for which path="*" in route component */}



   </Routes>
  )
}

export default AllRoutes
