// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgGKdreLnDzxy8IyfyQxAb2mbp5xqgAio",
  authDomain: "board-project-react.firebaseapp.com",
  projectId: "board-project-react",
  storageBucket: "board-project-react.appspot.com",
  messagingSenderId: "1037883318929",
  appId: "1:1037883318929:web:7f516a4218fee9084b1530",
  measurementId: "G-PXPZ758CCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// const analytics = getAnalytics(app);
export default db ;