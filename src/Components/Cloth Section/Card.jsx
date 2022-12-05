import {
  Box,
  Checkbox,
  Image,
  Input,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
// import CartDrawer from "./CartDrawer";
// import {

// } from "@chakra-ui/react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartItems from "./CartItems";

const Card = ({ items, w, top, left, right }) => {
  // console.log(items);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [size, setSize] = useState("");
  let [serchParams, setSearchParams] = useSearchParams();
  const [showDrawer, setShowDrawer] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImage] = useState(items.images[0].url);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(1819);
  const navigate = useNavigate();
  const { setTotalCart, totolCart } = useContext(CartContext);
  // console.log(totolCart);
  const btnRef = React.useRef();
  // const navigate = useNavigate();
  const showCartHandler = () => {
    setShowCart(true);
  };
  return (
    <Box
      cursor="pointer"
      key={items.id}
      onMouseEnter={() => {
        showCartHandler();
        setImage(items.images[1].url);
      }}
      onMouseLeave={() => {
        setShowCart(false);
        setImage(items.images[0].url);
      }}
    >
      <Box position="relative">
        <Image
          h="302px"
          w="205px"
          src={img}
          onClick={() => {
            navigate(`/details/${items.id}`);
          }}
        ></Image>
        {showCart && (
          <>
            <Button
              position="absolute"
              ml={2}
              px={1}
              pb={1}
              borderRadius="5px"
              w={w}
              h="25px"
              textAlign="center"
              bgColor="black"
              color="white"
              right={right}
              left={left}
              top={top}
              onClick={() => onOpen()}
              ref={btnRef}
              _hover={{ bgColor: "black" }}
            >
              <Text
                w="full"
                h="full"
                color="white"
                onClick={() => {
                  setTotalCart([
                    ...totolCart,
                    {
                      name: items.name,
                      image: items.images[0].url,
                      price: 1819,
                    },
                  ]);
                }}
              >
                Add To Cart
              </Text>
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent textAlign="center" w="200px" maxW="300px">
                <Text fontSize="14px" fontWeight="600" mt={2} fontFamily="Lato">
                  Your Cart
                </Text>
                <DrawerBody mt={5}>
                  {totolCart?.map((items) => (
                    <>
                      <Box
                        display="flex"
                        border="1px"
                        p={2}
                        borderRadius={2}
                        mt={2}
                      >
                        <Box>
                          <Image
                            w="150px"
                            h="110px"
                            src={items.image}
                            alt=""
                          ></Image>
                        </Box>
                        <Box
                          display="flex"
                          ml={3}
                          flexDir="column"
                          alignItems="flex-start"
                        >
                          <Text
                            fontSize="11px"
                            fontWeight="600"
                            fontFamily="Lato, san-serif"
                            textAlign="left"
                          >
                            {items.name}
                          </Text>
                          <Text fontSize="10px" color="gray">
                            ₹1,819
                          </Text>
                          <Box
                            mt="50px"
                            w="80px"
                            h="16px"
                            border="1px"
                            borderColor="gray"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Box
                              onClick={() => {
                                if (count > 1) {
                                  setCount(count - 1);
                                  setTotal(1819 * count);
                                }
                              }}
                              color="gray"
                              ml={1}
                              cursor="pointer"
                            >
                              -
                            </Box>
                            <Box fontSize="14px" ml={5}>
                              {count}
                            </Box>
                            <Box
                              onClick={() => {
                                setCount(count + 1);
                                setTotal(1819 * count);
                              }}
                              color="gray"
                              ml={5}
                              cursor="pointer"
                            >
                              +
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  ))}
                </DrawerBody>

                <DrawerFooter>
                  <Box display="flex" w="full" flexDir="column">
                    <Box
                      w="full"
                      border="1px"
                      h="30px"
                      borderColor="gray.200"
                      mb={2}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      px={2}
                    >
                      <Text fontSize="13px" fontWeight="600">
                        Subtoal:
                      </Text>
                      <Text>{total}</Text>
                    </Box>
                    <Button
                      borderRadius="none"
                      mx="15px"
                      color="white"
                      bgColor="black"
                      onClick={() => navigate("/cart")}
                    >
                      View Cart
                    </Button>
                    <Button
                      mx="15px"
                      borderRadius="none"
                      bgColor="black"
                      color="white"
                      mt={2}
                    >
                      Check Out
                    </Button>
                  </Box>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Box>
      <Box>
        <Text
          fontSize="13px"
          w="205px"
          h="20px"
          overflow="hidden"
          fontWeight="600"
          mt="3px"
        >
          {items.name}
        </Text>
        <Box display="flex">
          <Text fontSize="13px" fontWeight="600">
            ₹1,819
          </Text>
          <Text as="del" color="gray.400" fontSize="10px" mt={1} ml={1}>
            ₹2,599
          </Text>
          <Box
            fontSize="10px"
            w={12}
            // h={8}
            bgColor="red"
            pl={1}
            mt={1}
            color="white"
            // pl="2px"
            // border="1px"
          >
            -30%
          </Box>
        </Box>
      </Box>
      {/* <CartDrawer
  w="190px"
  top="270px"
  id={items.id}
  image={items.images[0].url}
  name={items.name}
  lefst="₹1,891"
></CartDrawer> */}
    </Box>
  );
};

export default Card;
