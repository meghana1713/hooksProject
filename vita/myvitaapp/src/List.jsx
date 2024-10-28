import React from 'react'
import { Person } from './Person'
 export const List = (props) => {
    const {people}=props;
  return (
  <section>
   {people.map((person)=>{
    // const {name,age}=person;
    // return <Person name={name} age={age}/>
      return <Person key={person.id}  {...person} />;
   })}
</section>
)
};


