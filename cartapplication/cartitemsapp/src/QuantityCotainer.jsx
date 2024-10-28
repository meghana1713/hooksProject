import React from 'react'

const QuantityContainer = ({quantity, id,changeQuantity}) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button onClick={()=>changeQuantity(id,-1)}>-</button>
      <p>{quantity}</p>
      <button onClick={()=>changeQuantity(id,+1)}>+</button> 
      
    </div>


  );
};

export default QuantityContainer
      {/* // we cannot store fn call directly to onClickbecause this fn will be call before triggering the event so we call this fn inside another fn i.e here we are using arrow fn as it is single line we are not using {} brackets */}
