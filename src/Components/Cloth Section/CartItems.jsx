import React, { useState } from "react";

import { Box, Checkbox, Image, Input, Text } from "@chakra-ui/react";
const CartItems = (items) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(1819);
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
  );
};

export default CartItems;
