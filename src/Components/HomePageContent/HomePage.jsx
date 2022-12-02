import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import HomePageRounded from "../HomePageRoundedSection/HomePageRounded";
import Nav from "../Nav/Nav";

const HomePage = () => {
  return (
    <>
      <Nav />
      <HomePageRounded />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
