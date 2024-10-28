import { useState } from 'react'

import './App.css'
 
import React from 'react'
import CartContainer from './CartContainer'
import Count from './useeffects/Count'

const App = () => {
  
  
      {/* <CartContainer/> */}
      let status=true;
      return status  ? <Count/> : <p>status false </p> // this is not in side jsx
  
  
};

export default App
