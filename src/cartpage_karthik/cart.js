import React, { createContext ,useEffect } from 'react';
import "./cart.css";
import {products} from "./product";
import ContextCart from "./ContextCart";
import { reducer } from './reducer';

export const CartContext = createContext();
// removing of item
const InitialState ={
  item : products,
  totalAmount : 0,
  totalItem : 0,
  quantity :1,
};
// increment the item


 function Cart() {
    // const [item ,setItem] = React.useState(products)
  const [state, dispatch] = React.useReducer(reducer, InitialState)
  const removeItem = (id) => {
    return dispatch({
      type : "REMOVE_ITEM",
      payload: id,
    })

  }
  const increment = (id) =>{
    return dispatch({
      type :"INCREMENT",
      payload: id,
    })
  }
  const decrement = (id) =>{
    return dispatch({
      type :"DECREMENT",
      payload: id,
    })
  };
useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);
  

  return (
    <div>
      <CartContext.Provider value={{... state , removeItem , increment ,decrement}}>
        <ContextCart />
      </CartContext.Provider>
       
    </div>
  )
}
export default Cart;