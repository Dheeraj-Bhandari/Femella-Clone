import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CrousalCss.css";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";
let slidesToShow = 3;
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
  slidesToScroll: 1,
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
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        // slidesToScroll: 1,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [data, setdata] = useState([]);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  function fecthTry() {
    axios
      .get(
        "https://smartnav.maker.co/api/get_config?config_id=ws-FxUDhP&live=true"
      )
      .then((res) => {
        // console.log("fecthdata", res.data.tabs[0].categories[0].children);
        setdata(res.data.tabs[0].categories[0].children);
      });
  }
  fecthTry();
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 2;
  } else if (width > 769 && width <= 1025) {
    slidesToShow =2;
  } else {
    slidesToShow = 2;
  }

  return (
    <div style={{ margin: "30px" }} className="carousel">
      <Slider {...carouselProperties}>
        {data.map((ele) => {
          return (
            <div key={ele.id}>
              <img
                className="multi_image_crousal"
                style={{
                  // width: "802px",
                    // height: "100%",
                  //   objectFit: "contain",
                  //   marginBottom: "10px",
                }}
                src={ele.image}
                alt=""
              />
            </div>
          );
        })}
    
      </Slider>
    </div>
  );
};



export default MultiItemCarousel;
