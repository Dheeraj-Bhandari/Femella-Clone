import React from "react";
import { Link } from "react-router-dom";
import "./Footercss.css";
const Footer = () => {
  return (
    <>
      <div className="FooterParent ">
      <hr />
        <div className="FooterChild1">
          <div className="subchild1">
            <div className="footerlogo">
              <img
                src="https://cdn.shopify.com/s/files/1/1695/7273/files/logo-footer-transparent_7fa1b507-debd-4bc3-8c38-f963083add28_180x.png?v=1648020911"
                alt="Footer logo"
              />
            </div>
            <div className="footerpara">
              <p>
                Making clothes that are simple, effortless and based on you,
                your style and your needs. Read More
              </p>
            </div>
          </div>

          <div className="subchild2">
            <p>Quick Links</p>
            <ul>
              <li>
                {" "}
                <Link to="#">New in</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Best Sellers</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Dresses</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Gift Cards</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Blog</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Size Guide</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Hand mist Spray</Link>
              </li>
            </ul>
          </div>
          <div className="subchild3">
            <p>HELP</p>
            <ul>
              <li>
                {" "}
                <Link to="#">Track Order</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Request a Return/Exchange</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Shipping & Return policy</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Terms and Conditions</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                {" "}
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="subchild4">
            <p>Connect</p>
            <ul>
              <li>
                {" "}
                <Link to="#">About us</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Contact us</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Instagram</Link>
              </li>
              <li>
                {" "}
                <Link to="#">Facebook</Link>
              </li>
            </ul>
          </div>
          <div className="subchild5">
            <p>Customer Care</p>
            <ul>
              <li>
                {" "}
                <i class="fa-brands fa-whatsapp"> +919711281655</i> <br />{" "}
                Mon-Fri 10:00am to 6:00pm (IST){" "}
              </li>
              <li>
                {" "}
                <i class="fa-solid fa-envelope"></i> info@femella.in{" "}
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="FooterChild2">
          <p>
            &#169; <Link to="/">2022 FEMELLA</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
