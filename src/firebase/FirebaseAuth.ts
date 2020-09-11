import * as firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ31t9hdSvj-HuzEZr0c7L2lV3TE8de4U",
  authDomain: "ionictextapp.firebaseapp.com",
  databaseURL: "https://ionictextapp.firebaseio.com",
  projectId: "ionictextapp",
  storageBucket: "ionictextapp.appspot.com",
  messagingSenderId: "906243569025",
  appId: "1:906243569025:web:b2770992b854352c73e480",
  measurementId: "G-9H0J6JLVDC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const loginUser = async (email: string, password: string) => {
  //authenticate with firebase.
  //if present show dashboard
  //if not show error
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    // console.log(res);
    return true;
  } catch (error) {
    // console.log(error);
    return false;
  }
};

export const registerUser = async (email: string, password: string) => {
  //authenticate with firebase.
  //if present show dashboard
  //if not show error
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // console.log(res);
    return true;
  } catch (error) {
    // console.log(error);
    return false;
  }
};
