import React, { useContext } from "react";
import GoogleLogo from "./images/google.png";
import "./GoogleBtn1.css";
import { signInWithGoogle } from "./Firebase";
import { AuthContext } from "../Context/AuthContext";

const GoogleBtn1 = () => {
  const { SignUpGoogle } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="g-btn">
        <div className="content-wrapper">
          <div className="logo-wrapper">
            <img src={GoogleLogo} alt="" />
          </div>
          <span className="text-container">
            <span onClick={SignUpGoogle}>Google Signup</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default GoogleBtn1;
