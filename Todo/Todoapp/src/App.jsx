import React, {useState} from 'react';
import Todos from './component/Todos';


const App = () => {
const [showTimer,setshowTimer] = useState(true);
  return (
    <div>
      <Todos/>
    </div>
  )
}

export default App

