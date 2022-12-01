import { Box, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";

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
    <Box mx="20px" mt={5}>
      <Text fontSize="18px" fontWeight="600">
        Winter Wear
      </Text>

      <Box>
        <Text>Colors</Text>
        <Checkbox
          name="black"
          value="Black"
          onChange={(e) => {
            setSColor(e.target.value);
            setSearchParams({ color: "Black", size });
          }}
        >
          Black
        </Checkbox>
        <Checkbox
          ml={2}
          name="blue"
          value="Blue"
          onChange={(e) => {
            setSColor(e.target.value);
            setSearchParams({ color: "Blue", size });
          }}
        >
          Blue
        </Checkbox>
        <Checkbox
          ml={2}
          name="Yellow"
          value="Yellow"
          onChange={(e) => {
            setSColor(e.target.value);
            setSearchParams({ color: "Yellow", size });
          }}
        >
          Yellow
        </Checkbox>
      </Box>
      <Box>
        <Text>Size</Text>
        <Checkbox
          name="XL"
          value="XL"
          onChange={(e) => {
            setSize(e.target.value);
            setSearchParams({ size: "XL" });
          }}
        >
          XL
        </Checkbox>
        <Checkbox
          ml={2}
          name="S"
          value="S"
          onChange={(e) => {
            setSize(e.target.value);
            setSearchParams({ size: "S" });
          }}
        >
          S
        </Checkbox>
        <Checkbox
          ml={2}
          name="M"
          value="M"
          onChange={(e) => {
            setSize(e.target.value);
            setSearchParams({ size: "M" });
          }}
        >
          M
        </Checkbox>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gap="20px"
        mt={4}
      >
        {data?.map((items) => (
          <Card items={items}></Card>
        ))}
      </Box>
    </Box>
  );
};

export default WinterSection;
