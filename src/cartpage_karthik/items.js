import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
// import { CartContext } from "./cart";

export default function Items({ curItem }) {
  console.log(curItem);
  const { totalAmount, setTotalAmout } = useContext(CartContext);
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={curItem.image} alt="" />
        </div>
        <div className="title">
          <h2>{curItem.name}</h2>
          {/* <p>{description}</p> */}
        </div>
        <div className="add-minus-quantity">
          <i
            className="fa-solid fa-minus"
            minus
            onClick={() => {
              if (count > 1) {
                setTotalAmout(totalAmount - curItem.price);
                setCount(count - 1);
              }
            }}
          ></i>
          <input type="text" placeholder={count} />
          <i
            className="fa-solid fa-plus"
            add
            onClick={() => {
              setTotalAmout(totalAmount + curItem.price);
              setCount(count + 1);
            }}
          ></i>
        </div>
        <div className="price">
          <h3>{curItem?.price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fa-solid fa-trash"

            // onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>
      <hr />
    </div>
  );
}
