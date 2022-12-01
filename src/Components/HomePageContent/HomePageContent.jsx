import React from "react";

import MultiItemCarousel from "./HomePageTopSliderSection/MultiItemCarousel ";
import data from "../HomePageContent/CatogeryId.json";
import HomePageCard from "./HomePageCard/HomePageCard";

const HomePageContent = () => {
  console.log(data);
  return (
    <>
      <MultiItemCarousel />

      {data.data.map((ele, index) => {
        return (
          <div key={ele.id}>
            <HomePageCard id={ele.id} title={ele.title} index={index} />
          </div>
        );
      })}
    </>
  );
};

export default HomePageContent;
