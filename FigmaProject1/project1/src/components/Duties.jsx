import React from 'react'
import { v4 as uuidv4 } from 'uuid'; 
// we will get unique id from npm uuid which is a node.js package
import { FaAngleDoubleRight } from "react-icons/fa"; // it is imported from react icons library

const Duties = ({duties}) => {
  return (
    <div>
      {duties.map((duty)=>{
        //ech item in duties is stored in duty 
      const  id = uuidv4();
      return <div key={id} className="job-des">
<FaAngleDoubleRight classNane="job-icon"/>
<p>{duty}</p>
      </div>
      })}
    </div>
  )
}

export default Duties
