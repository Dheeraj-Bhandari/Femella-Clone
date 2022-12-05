import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./HomePageSectionContentCss.css";
import CartDrawer from "../../Cloth Section/CartItems";
import Cards from "../HomePageCard/Cards";

const HomePageSectionContent = () => {
  const { id, title } = useParams();

  const [data, setdata] = useState([]);

  useEffect(() => {
    console.log(id, "inside");
    const Fecthcategory = async () => {
      const link = `https://smartnav.maker.co/api/get_products_by_category?category_id=${id}&store_id=623d4113c4dcc20004e6d187&sort=default&in_stock=true&limit=50`;
      console.log(link);
      await axios
        .get(link)
        .then((res) => {
          // console.log("HomePageSectionContent", res.data.products);
          setdata(res.data.products);
        })
        .catch((err) => console.log(err));
    };
    Fecthcategory();
  }, [id]);

  function handleAddToCartStyleonHover(id, query) {
    if (query === "hide") {
      document.getElementById(id).style.display = "none";
    } else {
      document.getElementById(id).style.display = "block";
    }
  }

  return (
    <>
      <h3>{title}</h3>
      <div className="HomePageSectionContentDiv">
        {data.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className="HomePageSectionContentCard"
              onMouseLeave={() => handleAddToCartStyleonHover(ele.id, "hide")}
              onMouseEnter={() => handleAddToCartStyleonHover(ele.id, "show")}
            >
              <div>
                {/* <img
                  className=""
                  style={{
                    width: "100%",
                    //   height: "170px",
                    //   objectFit: "contain",
                    //   marginBottom: "10px",
                  }}
                  src={ele.media[0][1].url}
                  alt={ele.id}
                /> */}
                <LazyLoadImage
                  src={ele.media[0][1].url}
                  alt={ele.id}
                  effect="blur"
                  width={"100%"}
                  // height={100}
                  key={ele.id}
                  placeholderSrc={ele.media[0][1].url}
                />
                <div className="addtocartdiv" id={ele.id}>
                  <button className="addtoCartbtnSectionpage">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="PriceAndTitleDiv">
                <h5 className="ItemName">{ele.name}</h5>
                <h5 className="price">
                  ₹{Math.round(ele.variants[0].price)}{" "}
                  <span className="mrp">
                    ₹{Math.round(ele.variants[0].compareAtPrice)}
                  </span>{" "}
                  <span className="discount">
                    &nbsp;{" "}
                    {Math.round(
                      ((ele.variants[0].compareAtPrice -
                        ele.variants[0].price) /
                        ele.variants[0].compareAtPrice) *
                        100
                    )}
                    % &nbsp;
                  </span>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePageSectionContent;
