import {
  Box,
  Checkbox,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CartDrawer from "./CartDrawer";

const Card = ({ items }) => {
  console.log(items);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [size, setSize] = useState("");
  let [serchParams, setSearchParams] = useSearchParams();
  const [showDrawer, setShowDrawer] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const showCartHandler = () => {
    setShowCart(true);
  };
  return (
    <Box
      cursor="pointer"
      key={items.id}
      onMouseEnter={showCartHandler}
      onMouseLeave={() => {
        setShowCart(false);
      }}
    >
      <Box position="relative">
        <Image h="302px" w="205px" src={items.images[0].url}></Image>
        {showCart && <CartDrawer></CartDrawer>}
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
            w={8}
            h={4}
            bgColor="red"
            ml={1}
            mt={1}
            color="white"
            pl="2px"
          >
            -30%
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
