
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8LbvxaXPsRnkKibecmFw2938e1h1-y2E",
  authDomain: "auth-786e4.firebaseapp.com",
  projectId: "auth-786e4",
  storageBucket: "auth-786e4.appspot.com",
  messagingSenderId: "316253366020",
  appId: "1:316253366020:web:7d4a1eeb668c1915dad251"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    //   const name = result.user.displayName;
    //   const email = result.user.email;

    //   localStorage.setItem("name", name);
    //   localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};