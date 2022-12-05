import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./items";
// import {products} from "./product";
// import { CartContext } from "./cart";
import { CartContext, CartContextProvider } from "../Context/CartContext";
// import { CartContext } from "./cart";

export default function ContextCart() {
  // const [item ,setItem] = React.useState(products)
  // const { item, totalItem, totalAmount } = useContext(CartContext);
  const { totolCart } = useContext(CartContext);
  console.log(totolCart);
  return (
    <div>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>totoalamout</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>YOUR SHOPPING CART</h1>
        <p className="total-items">
          you have <span className="total-items-count">totalIte</span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {totolCart?.map((curItem) => {
                return <Items key={curItem.id} curItem={curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Sub Total : <span>₹ totalAmoun</span>
          </h3>
          <br></br>
          <p>
            Tax included <b>SHIPPING</b> calculated at checkout
          </p>
          <button>Check out</button>
        </div>
      </section>
    </div>
  );
}
