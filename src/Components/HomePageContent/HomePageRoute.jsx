import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePageContent from "./HomePageContent";
import HomePageSectionContent from "./HomePageRoutePage/HomePageSectionContent";
import InstagramPage from "./HomePageRoutePage/InstagramPage";
import Cart from "../../cartpage_karthik/cart";
import Login from "../../login-signup_akhil/Login";
import Forgotpass from "../../login-signup_akhil/Forgotpass";
import SignUp from "../../login-signup_akhil/SignUp";
import Gift from "../../login-signup_akhil/Giftcard/Gift";
import WinterSection from "../Cloth Section/WinterSection";
import MaxiSection from "../Cloth Section/MaxiSection";
import { ChakraProvider } from "@chakra-ui/react";

const HomePageRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route exact path="/:title/:id" element={<HomePageSectionContent />} />
        <Route exact path="/INSTAGRAM" element={<InstagramPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forgotpass" element={<Forgotpass />} />
        <Route path="./Giftcard/Gift" element={<Gift />} />
        <Route
          path="/winter"
          element={
            <ChakraProvider>
              <WinterSection />
            </ChakraProvider>
          }
        />
        <Route
          path="/maxi"
          element={
            <ChakraProvider>
              <MaxiSection />
            </ChakraProvider>
          }
        />
      </Routes>
    </>
  );
};

export default HomePageRoute;
