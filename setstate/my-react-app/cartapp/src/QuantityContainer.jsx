import React from 'react'

const QuantityContainer = ({quantity, id,changeQuantity}) => {
  return (
    <div>
      <buton onClick={()=>changeQuantity(id,-1)}>-</buton>
      <p>{quantity}</p>
      <buton onClick={()=>changeQuantity(id,+1)}>+</buton> 
      // we cannot store fn call directly to onClickbecause this fn will be call before triggering the event so we call this fn inside another fn i.e here we are using arrow fn as it is single line we are not using {} brackets


    </div>
  );
};

export default QuantityContainer
