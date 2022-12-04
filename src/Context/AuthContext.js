import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../login-signup_akhil/Firebase";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const provider = new GoogleAuthProvider();
  const signUpGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AuthContext.Provider value={{ signUpGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
