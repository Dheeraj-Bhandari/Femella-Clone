import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePageCardCss.css";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../CatogeryId.json";
import { useState } from "react";
import { useEffect } from "react";
let slidesToShow = 5;
const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;

  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const HomePageCard = ({ id, title, index }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [catdata, setcatdata] = useState([]);
  const [titleimg, settitleimg] = useState(true)

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useState(() => {
    async function fecthTry() {
      await axios
        .get(
          `https://smartnav.maker.co/api/get_products_by_category?category_id=${id}&store_id=623d4113c4dcc20004e6d187&sort=default&in_stock=true`
        )
        .then((res) => {
          //   console.log("catogerydata", res.data.products);
          setcatdata(res.data.products);
        })
        .catch((err) => console.log(err));
    }
    fecthTry();
  }, []);
  //   console.log("data", data);
  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: "30px" }} className="carousel">
      <h4 className="cardTitle">{title}</h4>

      <Slider {...carouselProperties}>
        
        <LazyLoadImage
          className="titleimg"
          src={data.data[index].link}
          alt={id}
          effect="blur"
         
          // height={100}
          key={id}
          placeholderSrc={data.data[index]}
        />
        
        {catdata.map((ele) => {
          return (
            <div key={ele.id} className="HomecardDiv">
            
              <LazyLoadImage
                className="multi__image"
                src={ele.media[0][1].url}
                alt={ele.id}
                effect="blur"
                width={"100%"}
                // height={600}
                // height={100}
                key={ele.id}
                placeholderSrc={ele.media[0][1].url}
              />
              <div>
                <h5 className="prod_title">{ele.name.substring(0, 30)}...</h5>
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
        
      </Slider>
      
    </div>
  );
};

export default HomePageCard;
