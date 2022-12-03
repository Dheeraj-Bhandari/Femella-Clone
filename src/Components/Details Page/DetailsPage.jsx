import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdImages from "./ProdImages";

const DetailsPage = () => {
  const { productid } = useParams();
  const [prod, setProd] = useState([]);
  console.log(productid);
  useEffect(() => {
    fetch(
      `https://smartnav.maker.co/api/get_products?product_ids=${productid}&in_stock=true&store_id=623d4113c4dcc20004e6d187`
    )
      .then((res) => res.json())
      .then((res) => {
        setProd(res);
      });
    console.log(prod);
  }, []);
  console.log(prod);
  console.log(prod[0]?.images[0].url);

  const size = ["XS", "S", "M", "L", "XL", "XXL"];
  const details = [
    "Made From 60% Cotton 40% Polyester",
    "Hood Neck",
    "Solid Pattern",
    "Relaxed Fit",
    "Casual",
    "Cropped Length",
    "Ribbed Hemline",
    "Cold Wash",
  ];

  return (
    <Box>
      <Box display="flex">
        <Box w="50vw" h="100vh">
          <Box position="relative">
            <Box
              w="50vw"
              h="100vh"
              filter="blur(20px)"
              bgSize="100% 100%"
              bgImage={prod[0]?.images[0].url}
            ></Box>
            <Box position="absolute" top="50px" bottom="50px">
              <ProdImages prod={prod}></ProdImages>
            </Box>
            <Box position="absolute" top="30%" left="80%">
              <Image w="10%" ml={50} src={prod[0]?.images[3].url}></Image>
            </Box>
          </Box>
        </Box>
        <Box w="50vw" h="100vh">
          <Box
            mt={10}
            ml={10}

            // display="flex"
            // flexDir="column"
            // justifyContent="center"
            // alignItems="center"
          >
            <Text fontSize="14px" fontWeight="500">
              Black Hooded Cropped Fleece Zip Up
            </Text>
            <Box display="flex" mt={5}>
              <Text fontSize="18px" fontWeight="600">
                ₹1,819
              </Text>
              <Text as="del" color="gray.400" fontSize="13px" ml={2}>
                ₹2,599
              </Text>
              <Box
                fontSize="13px"
                w={16}
                bgColor="red"
                pl={1}
                ml={3}
                color="white"
              >
                -30%
              </Box>
            </Box>
            <Box
              w="full"
              border="1px"
              h="30px"
              bgColor="black"
              mt={8}
              textAlign="center"
            >
              <Text fontSize="13px" color="white" mt={2} cursor="pointer">
                USE CODE: FF15 Get 15% OFF on first purchase.
              </Text>
            </Box>
            <Text fontSize="13px" fontWeight="400" mt={10}>
              ✓ In Stock
            </Text>

            <Box mt={12}>
              <Text color="gray" fontSize="16px">
                Size
              </Text>
              <Box display="flex" mt={2}>
                {size.map((size) => (
                  <Box
                    ml={4}
                    w="40px"
                    h="30px"
                    border="1px"
                    borderColor="gray.400"
                    textAlign="center"
                    cursor="pointer"
                  >
                    <Text fontSize="17px" mt={2}>
                      {size}
                    </Text>
                  </Box>
                ))}
              </Box>
              <Box display="flex" gap={5} mt={12}>
                <Box
                  w="49%"
                  border="2px"
                  h="35px "
                  cursor="pointer"
                  textAlign="center"
                >
                  <Text fontSize="17px" mt={3}>
                    View Details
                  </Text>
                </Box>
                <Box
                  w="49%"
                  bgColor="black"
                  cursor="pointer"
                  border="1px"
                  h="35px"
                  textAlign="center"
                >
                  <Text color="white" fontSize="17px" mt={3}>
                    Add To Cart
                  </Text>
                </Box>
              </Box>
              <Box mt={16}>
                <Text
                  borderBottom="2px"
                  pb={2}
                  w="fit-content"
                  fontSize="16px"
                  fontWeight="700"
                >
                  PRODUCT DETAILS
                </Text>
                <UnorderedList mt={5}>
                  {details.map((detail) => (
                    <ListItem mt={4}>
                      <Text fontSize="14px" fontWeight="500">
                        {detail}
                      </Text>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsPage;
