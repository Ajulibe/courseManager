import * as firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { toast } from "../pages/toast";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//database
const db = firebaseApp.firestore();

export { db };

export const loginUser = async (email: string, password: string) => {
  //authenticate with firebase.
  //if present show dashboard
  //if not show error
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    toast(error.message, 4000);
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
    console.log(res);
    return true;
  } catch (error) {
    // console.log(error.message);
    toast(error.message, 4000);
    return false;
  }
};
