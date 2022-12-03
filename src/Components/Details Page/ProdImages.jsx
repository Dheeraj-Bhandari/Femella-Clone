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
  return (
    <Box display="flex">
      <Image w="70%" ml={50} src={prod[0]?.images[3].url}></Image>
    </Box>
  );
}
