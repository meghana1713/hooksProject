import React,{useState} from 'react'
import CartItems from './CartItems';
import Total from './Total';
let cartItems=[
    {id:1,label:"Noodles",price:20,quantity:1},
    {id:2,label:"Briyani",price:90,quantity:1},
    {id:3,label:"Soup",price:10,quantity:1}


]
//in future we will increase quantity for that it should know to the react that changes happen to a dom element we use usestate
const CartContainer = () => {
const [cart,setCart]= useState(cartItems);
const totalPrice = cart.reduce(function(bag,item){
  return bag + (item.price * item.quantity) // it stores in bag and bag value will store in totalPrice variable
},0);
  //here 0 is like sum=o intializing ang bag is variable like acummulator.
const changeQuantity = (id,value)=> {
  // before we changing the quantity value we need to check if the selected items is there or not by chexing its id is there or not in cart
  let updateCart= cart.map((item)=>
    // here  in side map function so that no need to use return statement if we use {} we have to mention return statement
    item.id=== id ? {...item ,quantity:item.quantity + value}:item //here quantity value will be changed in item object and create copy and again asigned to same object name "item"

  );
  setCart(updateCart);// by using setCart fn we are updating  cart array value
};
  return (
    <div>
      {
        cart.map((item)=>{
            return(
                <CartItems key={item.id} {...item}/>  // this entire thing is <CartItems/> 
            )
          })
      }

      <Total totalPrice={totalPrice} />
    </div>
  )
}

export default CartContainer
