import React from "react";
// import banner from "../Components/photos/Capture.PNG";
import "./Checkout.css";
import payment from "./photos/payment_gateway.PNG";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import discount from "./photos/discount_1.PNG";
import delievery from "./photos/delievery_2.PNG";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const popup = () => console.log("Wow so easy!");
function Checkout2() {
  return (
    <div>
      <div className="main_banner">{/* <img src={banner} /> */}</div>
      <div className="main_container">
        <div className="container_1">
          <div className="space_container">
            <div className="logo_1">
              <img src="https://cdn.shopify.com/s/files/1/1695/7273/files/logo_53c0cc6e-938b-4d5b-841b-152989e139e8.jpg?v=1643792377" />
              <p>Cart > Information > Shipping > Payment</p>
            </div>
            <div className="Con_1_Card_2">
              <img src={payment}></img>
            </div>
            <div className="Con_1_Card_3">
              <span>
                <p>Contact Information</p>
              </span>
              <span>
                <p className="already">
                  Already have an account?
                  <Link>Login</Link>
                </p>
              </span>
            </div>
            <div className="Con_1_Card_3_input">
              <div className="selectedbox1">
                <div>
                  <span>Contact</span>
                  <span>parteekaror007@gmail.com</span>
                  <span>Change</span>
                </div>
                <div>
                  <span>Ship to</span>
                  <span>44/8near rose gardenpatiala,</span>
                  <span>Change</span>
                </div>
              </div>
            </div>
            <div className="Con_1_Card_4_form">
              <p className="Con_1_Card_4_address">Shipping method</p>

              <div className="selectedbox2">
                <div>
                  <span>Standard Shipping</span>
                  <span>Free</span>
                </div>
                <div>
                  <span>Standard Shipping </span>
                  <span>Free</span>
                </div>
              </div>
            </div>

            <div className="Con_1_Card_4_button">
              <div>
                <Link>Return to Information</Link>
              </div>
              <div className="button_section">
                <button onClick={popup}>Continue to Payment</button>
              </div>
            </div>
            <p>Refund policy Shipping policy Privacy policy Terms of service</p>
          </div>
        </div>
        <div className="container_2">
          <div className="Container2_wrap">
            <div className="Con2_Card_1">
              <div className="image_paart">
                <img src="https://cdn.shopify.com/s/files/1/1695/7273/products/09-11-202201789_small.jpg?v=1670059325" />
              </div>
              <div className="Prod_desc">
                Black Hooded Cropped Fleece Zip Up<br></br>
                Black / XS
              </div>
              <div className="prod_price">₹2,374.00</div>
            </div>
            <hr></hr>
          </div>
          <hr></hr>
          <div className="Con2_Card_2">
            <div>
              <input placeholder="Gift card or discount code" />
            </div>
            <div>
              <button>Apply</button>
            </div>
          </div>
          <div className="Con2_Card_3">
            <div className="image_1">
              <img src={discount} />
            </div>
            <div className="image_2">
              <img src={delievery} />
            </div>
          </div>
          <div className="Con2_Card_4">
            <hr></hr>
            <table>
              <tr>
                <th>Subtotal</th>

                <td>₹2,374.00</td>
              </tr>
              <tr>
                <th>Shipping</th>

                <td>Calculated at next step</td>
              </tr>
              <tr>
                <th>Total</th>

                <td>INR ₹2,374.00</td>
              </tr>
            </table>
            <hr></hr>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Checkout2;
