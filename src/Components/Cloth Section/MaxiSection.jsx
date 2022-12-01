import { Box, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import SortButtons from "./SortButtons";

const MaxiSection = ({}) => {
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
      `https://smartnav.maker.co/api/get_products_by_category?category_id=282560135339&store_id=623d4113c4dcc20004e6d187&sort=default&in_stock=true&price=&size=&color=${color}&pattern=&material=&tag=&max_price=0&min_price=0&limit=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
        setProducts(res);
        console.log(res);
      });
  }, [color, size]);

  return (
    <Box mt={5} w="100vw">
      <Text fontSize="18px" fontWeight="600" ml="150px">
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
          w="87vw"
          h="88vh"
          overflow="scroll"
          // border="1px"
          gridTemplateColumns="1fr 1fr 1fr 1fr"
          // gap="10px"
          gridRowGap="10px"
          // gridColumnGap="-80px"
          mt={4}
        >
          {data?.map((items) => (
            <Card items={items}></Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MaxiSection;
