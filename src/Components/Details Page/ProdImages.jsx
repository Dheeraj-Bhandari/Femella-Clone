import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function ProdImages({ prod }) {
  const [no, setNo] = useState(0);
  return (
    <>
      <Box display="flex">
        <Image w="70%" ml={50} src={prod[0]?.images[no].url}></Image>
      </Box>
      <Box position="absolute" top="20%" left="80%" cursor="pointer">
        <Image
          w="40%"
          border="1px"
          borderColor="gray.500"
          mt={2}
          ml={50}
          onMouseEnter={() => setNo(0)}
          src={prod[0]?.images[0].url}
        ></Image>
        <Image
          w="40%"
          mt={5}
          ml={50}
          onMouseEnter={() => setNo(1)}
          src={prod[0]?.images[1].url}
        ></Image>
        <Image
          w="40%"
          mt={5}
          ml={50}
          onMouseEnter={() => setNo(2)}
          src={prod[0]?.images[2].url}
        ></Image>
        <Image
          w="40%"
          mt={5}
          ml={50}
          onMouseEnter={() => setNo(3)}
          src={prod[0]?.images[3].url}
        ></Image>
        <Image
          w="40%"
          mt={5}
          ml={50}
          onMouseEnter={() => setNo(4)}
          src={prod[0]?.images[4].url}
        ></Image>
      </Box>
    </>
  );
}
