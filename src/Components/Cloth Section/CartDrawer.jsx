import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
const CartDrawer = ({ w, top, bottom, left, right }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(1819);

  return (
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
        onClick={onOpen}
        ref={btnRef}
        _hover={{ bgColor: "black" }}
      >
        Add To Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent textAlign="center" w="200px" maxW="300px">
          <Text fontSize="14px" fontWeight="600" mt={2} font-family="Lato">
            Your Cart
          </Text>
          <DrawerBody mt={5}>
            <Box display="flex" border="1px" p={2} borderRadius={2}>
              <Box>
                <Image
                  w="150px"
                  h="110px"
                  src="https://cdn.shopify.com/s/files/1/1695/7273/products/FF-4296-BLUE_1.jpg?v=1669613254"
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
                  WINE RELAXED FLEECE GRAPHIC HOODIE - WINE / L
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
  );
};

export default CartDrawer;
