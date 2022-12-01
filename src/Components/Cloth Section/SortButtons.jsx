// import { Checkbox } from "@chakra-ui/react";
import { Box, Checkbox, Image, Input, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortButtons = ({ setSColor, size, setSize, setSearchParams }) => {
  return (
    <>
      <Box w="150px" mt={5} pl={5}>
        <Text fontSize="14px">Colors</Text>
        <Box display="flex" flexDir="column" gap={2} mt={2}>
          <Checkbox
            fontWeight="300"
            fontSize="12px"
            name="black"
            value="Black"
            onChange={(e) => {
              setSColor(e.target.value);
              setSearchParams({ color: "Black", size });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              Black
            </Text>
          </Checkbox>
          <Checkbox
            fontWeight="300"
            fontSize="12px"
            name="blue"
            value="Blue"
            onChange={(e) => {
              setSColor(e.target.value);
              setSearchParams({ color: "Blue", size });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              {" "}
              Blue
            </Text>
          </Checkbox>
          <Checkbox
            name="Yellow"
            value="Yellow"
            onChange={(e) => {
              setSColor(e.target.value);
              setSearchParams({ color: "Yellow", size });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              Yellow
            </Text>
          </Checkbox>
          <Checkbox
            name="Navy"
            value="Navy"
            onChange={(e) => {
              setSColor(e.target.value);
              setSearchParams({ color: "Navy", size });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              Navy
            </Text>
          </Checkbox>
          <Checkbox
            name="Olive"
            value="Olive"
            onChange={(e) => {
              setSColor(e.target.value);
              setSearchParams({ color: "Olive", size });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              Olive
            </Text>
          </Checkbox>
        </Box>
        <Box mt={5} display="flex" flexDir="column" gap={2}>
          <Text fontSize="14px">Size</Text>
          <Checkbox
            name="XL"
            value="XL"
            onChange={(e) => {
              setSize(e.target.value);
              setSearchParams({ size: "XL" });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              XL
            </Text>
          </Checkbox>
          <Checkbox
            name="S"
            value="S"
            onChange={(e) => {
              setSize(e.target.value);
              setSearchParams({ size: "S" });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              S
            </Text>
          </Checkbox>
          <Checkbox
            name="M"
            value="M"
            onChange={(e) => {
              setSize(e.target.value);
              setSearchParams({ size: "M" });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              M
            </Text>
          </Checkbox>
          <Checkbox
            name="L"
            value="L"
            onChange={(e) => {
              setSize(e.target.value);
              setSearchParams({ size: "L" });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              L
            </Text>
          </Checkbox>
          <Checkbox
            name="XL"
            value="XL"
            onChange={(e) => {
              setSize(e.target.value);
              setSearchParams({ size: "XL" });
            }}
          >
            <Text fontWeight="300" fontSize="12px">
              XL
            </Text>
          </Checkbox>
        </Box>
      </Box>
    </>
  );
};

export default SortButtons;
