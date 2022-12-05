import React, { useContext } from "react";
import { CartContext } from "./cart";

export default function Items({ curItem }) {
  console.log(curItem);
  const { removeItem, increment, decrement } = useContext(CartContext);

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
            // onClick={() => decrement(id)}
          ></i>
          {/* <input type="text" placeholder={quantity} /> */}
          {/* <i className="fa-solid fa-plus" add onClick={() => increment(id)}></i> */}
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
