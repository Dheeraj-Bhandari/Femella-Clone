import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProdImages from "./ProdImages";

const DetailsPage = () => {
  const { productid } = useParams();
  console.log(productid);
  useEffect(() => {
    fetch(
      `https://smartnav.maker.co/api/get_products?product_ids=${productid}&in_stock=true&store_id=623d4113c4dcc20004e6d187`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <Box>
      <Box display="flex">
        <Box w="55vw" h="100vh" border="1px">
          <ProdImages></ProdImages>
        </Box>
        <Box w="45vw" h="100vh" border="1px"></Box>
      </Box>
    </Box>
  );
};

export default DetailsPage;
