import React, { useContext } from "react";
import GoogleLogo from "./images/google.png";
import "./GoogleBtn1.css";
// import { signInWithGoogle } from "./Firebase";
import { AuthContext } from "../Context/AuthContext";

const GoogleBtn1 = () => {
  const { signUpGoogle } = useContext(AuthContext);
  console.log(signUpGoogle);
  return (
    <div className="container">
      <div className="g-btn" onClick={signUpGoogle}>
        <div className="content-wrapper">
          <div className="logo-wrapper">
            <img src={GoogleLogo} alt="" />
          </div>
          <span className="text-container">
            <span >Google Signup</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default GoogleBtn1;
