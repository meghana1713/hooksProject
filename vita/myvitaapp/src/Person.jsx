import React from 'react'

 export const Person = (props) => {
const {age,name}=props;
  return (
 <article className="person"> 
    <div>
        <h4>{name}</h4>
        <p>{age}</p>
    </div>
 </article>
  )
}

