import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePageRoundedSectionmg from "./HomePageRoundedSectionmg.json";
import "./HomePageRoundedCss.css";
const HomePageRounded = () => {
  const [Border] = useState(false);

  return (
    <>
      <div className="parentdiv">
        <Link to="/">
          <div className="img">
            <img
              className={Border ? "bordercolr" : ""}
              src="https://res.cloudinary.com/makerinc/image/fetch/f_auto,q_auto,fl_preserve_transparency,c_fit,$bw_72,$bh_72,$dw_$bw_div_iw,$dh_$bh_div_ih/if_$dh_lt_$dw/w_$bw/if_else/h_$bh/if_end/dpr_1/https%3A%2F%2Fsmartnav-image-uploads.s3-us-west-1.amazonaws.com%2FaV-01Uivs.jpg"
              alt="Shop All"
            />
            <p>Shop All</p>
          </div>
        </Link>
        {HomePageRoundedSectionmg.data.map((ele) => {
          return (
            <Link to={`${ele.title}/${ele.id}`} key={ele.title}>
              <div className="img">
                <img
                  className={Border ? "bordercolr" : ""}
                  src={ele.img}
                  alt={ele.title}
                />
                <p>{ele.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomePageRounded;
