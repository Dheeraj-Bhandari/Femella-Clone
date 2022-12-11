import React, { useContext, useState } from "react";
// import banner from "../Components/photos/Capture.PNG";
import "./Checkout.css";
import payment from "./photos/payment_gateway.PNG";
import { Box, Checkbox, CheckboxGroup, Image, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import discount from "./photos/discount_1.PNG";
import delievery from "./photos/delievery_2.PNG";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";


function Checkout() {
  const navigate = useNavigate();
  const { setTotalCart, totolCart } = useContext(CartContext);
  const [loading, setloading] = useState(false)
  const { user } = useContext(AuthContext);
  const [address, setAddress] = useState("");
  console.log(user);
  console.log(totolCart);


  
function gotolastpage(){
  
  navigate("/checkout/bill");
  localStorage.setItem("add", address);
}

function lastpagecheckout(){

 setTimeout(() => {
  
  gotolastpage();
 }, 3000);
}

  return (
    <div style={{ marginBottom: "5px", marginTop: "30px" }}>
      <div className="main_banner">{/* <img src={banner} /> */}</div>
      <div className="main_container">
        <div className="container_1">
          <div className="space_container">
            <div className="logo_1">
              <img
                src="https://cdn.shopify.com/s/files/1/1695/7273/files/logo_53c0cc6e-938b-4d5b-841b-152989e139e8.jpg?v=1643792377"
                alt=""
              />
              <p>Cart &gt; Information &gt; Shipping &gt; Payment</p>
            </div>
            <div className="Con_1_Card_2">
              <Image src={payment}></Image>
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
              <Input
                value={user?.email}
                placeholder="Email"
                fontSize="14px"
                borderColor="gray.400"
              />
              <div className="Con_1_Card_3_chkbox">
                <Checkbox colorScheme="black" defaultChecked>
                  Email me with news and offers
                </Checkbox>
              </div>
            </div>
            <div className="Con_1_Card_4_form">
              <p className="Con_1_Card_4_address">Shipping addres</p>
              <div className="siingle_input">
                <Input
                  value="India"
                  placeholder="India"
                  fontSize="14px"
                  borderColor="gray.400"
                />
              </div>

              <div className="double_input">
                <Input
                  placeholder=" Name"
                  value={user?.displayName}
                  fontSize="14px"
                  borderColor="gray.400"
                />
              </div>
              <div className="siingle_input">
                <Input
                  placeholder="Address"
                  fontSize="14px"
                  borderColor="gray.400"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="siingle_input">
                <Input
                  placeholder="Apartment, suite, etc. (optional)"
                  fontSize="14px"
                  borderColor="gray.400"
                />
              </div>

              <div className="multiple_input">
                <Input
                  placeholder="City"
                  fontSize="14px"
                  borderColor="gray.400"
                />
                <Input
                  placeholder="State"
                  fontSize="14px"
                  borderColor="gray.400"
                />
                <Input
                  placeholder="PIN code"
                  fontSize="14px"
                  borderColor="gray.400"
                />
              </div>
              <div className="single_input">
                <Input
                  placeholder="phone"
                  fontSize="14px"
                  w="200px"
                  borderColor="gray.400"
                />
              </div>
            </div>
            <Checkbox colorScheme="black" defaultChecked>
              <p> Save this information for next time</p>
            </Checkbox>
            <div className="Con_1_Card_4_button">
              <div>
                <Link>Return to login</Link>
              </div>
              <div className="button_section">
                <Button
                  onClick={() => {
                    // setloading(true);
                   lastpagecheckout()
                  }}
                  fontSize="12px"
                >
                  Submit
                </Button>
              </div>
            </div>
            <h6>
              Refund policy Shipping policy Privacy policy Terms of service
            </h6>
          </div>
        </div>
        <div className="container_2">
          <div className="Container2_wrap">
            <Box
              display="flex"
              flexDir="column"
              border="1px"
              padding="8px"
              overflow="scroll"
              h="240px"
            >
              {totolCart?.map((items) => (
                <>
                  <Box
                    display="flex"
                    mt="10px"
                    border="1px"
                    gap={5}
                    h="full"
                    w="full"
                  >
                    <div className="image_paart">
                      <Image w="80px" src={items.image} alt="" />
                    </div>
                    <Box display="flex" flexDir="column" gap={5}>
                      <Text>{items.name}</Text>

                      <Text>₹2,374.00</Text>
                    </Box>
                  </Box>
                </>
              ))}
            </Box>
            <hr></hr>
            <div className="Con2_Card_2">
              <div>
                <Input
                  fontSize="14px"
                  placeholder="Gift card or discount code"
                />
              </div>
              <div>
                <Button fontSize="14px">Apply</Button>
              </div>
            </div>
            <div className="Con2_Card_3">
              <div className="image_1">
                <img src={discount} alt="" />
              </div>
              {/* <div className="image_2">
                <img src={delievery} alt="" />
              </div> */}
            </div>
            <hr></hr>
            <div className="Con2_Card_4">
              {/* <table>
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
              </table> */}
              <hr></hr>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    {/* {loading ?   <img  src="https://media.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" /> : ""} */}
    </div>
  );
}

export default Checkout;
