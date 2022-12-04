import React, { useContext } from "react";
import GoogleLogo from "./images/google.png";
import "./GoogleBtn.css";
import { AuthContext } from "../Context/AuthContext";
// import { signInWithGoogle } from "./Firebase";

const GoogleBtn = () => {
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
            <span>Google Login</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default GoogleBtn;
