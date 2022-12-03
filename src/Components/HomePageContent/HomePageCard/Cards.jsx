import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CartDrawer from "../../Cloth Section/CartDrawer";
import "./HomePageCardCss.css";
const Cards = ({ ele, w }) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <div
        key={ele.id}
        className="HomecardDiv"
        onMouseEnter={() => {
          setShowButton(true);
        }}
        onMouseLeave={() => {
          setShowButton(false);
        }}
      >
        <div style={{ position: "relative" }}>
          <LazyLoadImage
            className="multi__image"
            src={ele.media[0][1].url}
            alt={ele.id}
            effect="blur"
            width={"100%"}
            // height="260px"
            // height={100}
            key={ele.id}
            placeholderSrc={ele.media[0][1].url}
          />
          {showButton && <CartDrawer w={w} top="140px" left="px"></CartDrawer>}
        </div>
        <div>
          <h5 className="prod_title">{ele.name.substring(0, 30)}...</h5>
          <div className="pricediv">

          <h5 className="price">
            ₹{Math.round(ele.variants[0].price)}{" "}
            <span className="mrp">
              ₹{Math.round(ele.variants[0].compareAtPrice)}
            </span>{" "}
            <span className="discount">
              &nbsp;{" "}
              {Math.round(
                ((ele.variants[0].compareAtPrice - ele.variants[0].price) /
                  ele.variants[0].compareAtPrice) *
                  100
              )}
              % &nbsp;
            </span>
          </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
