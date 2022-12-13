// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkbTBceynPnXu4aKFxpkOQq8GVYMz63Hk",
  authDomain: "finalproject-2e5ee.firebaseapp.com",
  projectId: "finalproject-2e5ee",
  storageBucket: "finalproject-2e5ee.appspot.com",
  messagingSenderId: "608233259179",
  appId: "1:608233259179:web:cf01ea9c833df31443f7ee",
  measurementId: "G-230QM9202N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const analytics = getAnalytics(app);

export default db;