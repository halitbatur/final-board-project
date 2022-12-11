// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0crPOif5Z33O51XU3NqC0CwVZnAibes",
  authDomain: "final-board-project.firebaseapp.com",
  projectId: "final-board-project",
  storageBucket: "final-board-project.appspot.com",
  messagingSenderId: "737466728156",
  appId: "1:737466728156:web:a12c06224ffe092ca67e19",
  measurementId: "G-3GVNXDJLME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
