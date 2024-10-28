import React, { useState } from 'react'

let intialValue={
    userName :" ",
    country: " ",
    isMaried:"no", // intial values
    favColors:[
        {color:"red", checked:false},
        {color:"Blue", checked:false},
        {color:"Green", checked:false}
    ]


}

const ForExampple = () => {
     
 const [formState,setFormState]=useState(intialValue);
 const handleChange=(event,index)=>{
   console.log(event); 
   console.log(event.target); 
   const {name,value,checked}=event.target; //event is an object inside event target is an object which represent a tag here we are target is input element as this element is an attribut its attributes are treated as properties of target object 
   //here we are destructuring target object properties
   console.log(name,value,checked);
   if(name==="favColors"){
    const newFavColors = [...formState.favColors];// newFavColors object is the copy of favColors object which is inside the formState object
    newFavColors[index].checked=checked//   newFavColors[index].checked this checked is the property of newFavColors object  and =checked  this checked is the value of input tag 
   setFormState({...formState, favColors:newFavColors})
}
   setFormState({...formState,[name]:value})
 }
 const handleSubmit=(event)=>{
    event.preventDefault();//it stops from refreshing the page which is default behaviour of a form
     console.log(formState);
}

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}> 
        <input type="text" placeholder="UserName" onChange={handleChange} name="userName" value={formState.value} />
        <select onChange={handleChange} name="country" value={formState.value}>
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="china">China</option>

            <option value="usa">USA</option>
        </select>
        <label>
        <input type="radio" onChange={handleChange}  name="isMaried" value="yes" checked={formState.isMaried === "yes"} /> 
         {/* if this formState.isMaried === "yes this condition is true then this particular button will be checked  */}
       {/* if we keep checked attribute by defaultly its value will be true if we want to change its value we need to metionn true or false  */}
        yes
        </label>
        <label>
        <input type="radio" onChange={handleChange} name="isMaried" value="no" checked={formState.isMaried==="no"}/> 
         {/* if this formState.isMaried === "yes this condition is true then this particular button will be checked  */}
        no
        </label>
        <br>
        </br>
         {formState.favColors.map((colorObj,index)=>{
            return(
                <label key={index}>
                    <input type="checkbox" name="favColors" checked={colorObj.checked} onChange={(event)=>{
                        handleChange(event,index)

                    }}/>
                    {colorObj.color}</label>
            )

         })}
        <input type="submit"/>
      </form>
    </div>
  )
}

export default ForExampple
