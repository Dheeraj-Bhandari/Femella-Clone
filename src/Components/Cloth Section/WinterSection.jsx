import { Box, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import SortButtons from "./SortButtons";

const WinterSection = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [color, setSColor] = useState("");
  const [size, setSize] = useState("");
  let [serchParams, setSearchParams] = useSearchParams();
  const showCartHandler = () => {
    setShowCart(true);
  };
  useEffect(() => {
    fetch(
      `https://smartnav.maker.co/api/get_products_by_category?category_id=289949810859&store_id=623d4113c4dcc20004e6d187&sort=default&in_stock=true&limit=20&color=${color}&size=${size}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
        setProducts(res);
        console.log(res);
      });
  }, [color, size]);

  return (
    <Box mt={5} w="100%">
      <Text fontSize="18px" fontWeight="600">
        Winter Wear
      </Text>
      <Box display="flex">
        <SortButtons
          setSColor={setSColor}
          size={size}
          setSize={setSize}
          setSearchParams={setSearchParams}
        ></SortButtons>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr 1fr"
          gap="20px"
          mt={4}
          mb={10}
        >
          {data?.map((items) => (
            <Card items={items}></Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WinterSection;
