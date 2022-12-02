import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./HomePageSectionContentCss.css";
import CartDrawer from "../../Cloth Section/CartDrawer";
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
          return <Cards ele={ele} w="140px"></Cards>;
        })}
      </div>
    </>
  );
};

export default HomePageSectionContent;
