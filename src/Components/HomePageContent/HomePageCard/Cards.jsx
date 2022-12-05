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
import React, { useContext, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import CartDrawer from "../../Cloth Section/CartItems";
import "./HomePageCardCss.css";
const Cards = ({ ele, w, top, right, left }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showButton, setShowButton] = useState(false);
  const { setTotalCart, totolCart } = useContext(CartContext);
  const btnRef = React.useRef();
  const [img, setImg] = useState(ele.images[0].url);
  const navigate = useNavigate();
  return (
    <>
      <div
        key={ele.id}
        className="HomecardDiv"
        onMouseEnter={() => {
          setShowButton(true);
        }}
        onMouseLeave={() => {
          setShowButton(false);
        }}
      >
        <div style={{ position: "relative" }}>
          <LazyLoadImage
            className="multi__image"
            src={img}
            alt={ele.id}
            effect="blur"
            onMouseEnter={() => setImg(ele.images[1].url)}
            onMouseLeave={() => setImg(ele.images[0].url)}
            width={"100%"}
            key={ele.id}
            placeholderSrc={ele.images[0].url}
          />
          {showButton && (
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
                        name: ele.name,
                        image: ele.images[0].url,
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
                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    mt={2}
                    fontFamily="Lato"
                  >
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
                                // onClick={() => {
                                //   if (count > 1) {
                                //     setCount(count - 1);
                                //     setTotal(1819 * count);
                                //   }
                                // }}
                                color="gray"
                                ml={1}
                                cursor="pointer"
                              >
                                -
                              </Box>
                              <Box fontSize="14px" ml={5}>
                                2002
                              </Box>
                              <Box
                                // onClick={() => {
                                //   setCount(count + 1);
                                //   setTotal(1819 * count);
                                // }}
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
                        <Text>4232</Text>
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
        </div>
        <div>
          <h5 className="prod_title">{ele.name.substring(0, 30)}...</h5>
          <div className="pricediv">
            <h5 className="price">
              ₹{Math.round(ele.variants[0].price)}{" "}
              <span className="mrp">
                ₹{Math.round(ele.variants[0].compareAtPrice)}
              </span>{" "}
              <span className="discount">
                &nbsp;{" "}
                {Math.round(
                  ((ele.variants[0].compareAtPrice - ele.variants[0].price) /
                    ele.variants[0].compareAtPrice) *
                    100
                )}
                % &nbsp;
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
