import { Box, Image, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const CartsItems = ({ items }) => {
  const { setTotalCart, totolCart, totalAmount, setTotalAmout } =
    useContext(CartContext);
  const [count, setCount] = useState(1);
  console.log(items);
  return (
    <>
      <Box display="flex" border="1px" p={2} borderRadius={2} mt={2}>
        <Box>
          <Image w="150px" h="110px" src={items.image} alt=""></Image>
        </Box>
        <Box display="flex" ml={3} flexDir="column" alignItems="flex-start">
          <Text
            fontSize="11px"
            fontWeight="600"
            fontFamily="Lato, san-serif"
            textAlign="left"
          >
            {items.name}
          </Text>
          <Text fontSize="10px" color="gray">
            {items.price}
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
                  setTotalAmout(items.price * count);
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
                console.log(typeof count);
                setTotalAmout(items.price * count);
                console.log(typeof totalAmount);
                console.log(totalAmount);
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
  );
};

export default CartsItems;
