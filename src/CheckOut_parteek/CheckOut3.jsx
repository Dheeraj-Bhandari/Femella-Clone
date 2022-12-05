import React, { useContext } from "react";
// import banner from "../Components/photos/Capture.PNG";
import "./Checkout3.css";
import payment from "./photos/payment_gateway.PNG";
import { Box, Checkbox, CheckboxGroup, Image, Text } from "@chakra-ui/react";
// import { / } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import discount from "./photos/discount_1.PNG";
import delievery from "./photos/delievery_2.PNG";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
// import { Liimport { Navigate } from "react-router-dom";nk } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
const popup = () => console.log("Wow so easy!");
function Checkout3() {
  const { setTotalCart, totolCart } = useContext(CartContext);
  let add = localStorage.getItem("add");
  const navigate = useNavigate();
  return (
    <div>
      <Box w="100vw" className="main_container">
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          className="container_1"
        >
          <div className="space_container">
            <div className="logo_1">
              <Image
                w="60vw"
                src="https://cdn.shopify.com/s/files/1/1695/7273/files/logo_53c0cc6e-938b-4d5b-841b-152989e139e8.jpg?v=1643792377"
              />
              <p>Cart &gt; Information &gt; Shipping &gt; Payment</p>
            </div>
            <div className="Con_1_Card_2">
              <img src={payment}></img>
            </div>

            <Box w="80%" className="Con_1_Card_4_form">
              <Text fontSize="14px" mb={10} className="Con_1_Card_4_address">
                Customer information
              </Text>

              <Box border="1px" w="70vw" padding={20} borderRadius="20px">
                <div>
                  <Box display="flex " flexDir="column">
                    <Box mb={10}>
                      <Text fontSize="14px">Contact information</Text>
                      <Text fontSize="14px">Payment method : COD</Text>
                    </Box>
                    <Text fontSize="14px">parteekarora007@gmail.com</Text>
                    <Text fontSize="14px">
                      Cash on Delivery (COD) - ₹2,659.00
                    </Text>

                    <Text fontSize="14px" mt={10}>
                      Shipping address
                    </Text>
                    <Text fontSize="14px" mt={2}>
                      Billing address
                    </Text>

                    <Text fontSize="15px">{add}</Text>

                    <Text fontSize="14px">Shipping method</Text>

                    <Text fontSize="14px">Standard Shipping with COD</Text>
                  </Box>
                </div>
                <Button
                  mt={10}
                  color="white"
                  bgColor="black"
                  _hover={{ bgColor: "black" }}
                  onClick={() => {
                    navigate("/");
                  }}
                  w="100px"
                >
                  Home
                </Button>
              </Box>
            </Box>

            <div className="Con_1_Card_4_button">
              <div>{/* <Link>Need help?Contact us</Link> */}</div>
              <div className="button_section"></div>
            </div>
            <Text fontSize="12px" mt={5}>
              Refund policy Shipping policy Privacy policy Terms of service
            </Text>
          </div>
        </Box>

        <div className="container_2">
          {/* {totolCart?.map((items) => (
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
                  <Text fontSize="14px">{items.name}</Text>

                  <Text fontSize="14px">₹2,374.00</Text>
                </Box>
              </Box>
            </>
          ))} */}

          <div className="Con2_Card_4"></div>
        </div>
      </Box>
    </div>
  );
}

export default Checkout3;
