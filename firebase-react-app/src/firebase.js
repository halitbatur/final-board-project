// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaIGh5NOMwt2DBMep1ciZrTY0DhG4mn50",
  authDomain: "board-project-team7.firebaseapp.com",
  projectId: "board-project-team7",
  storageBucket: "board-project-team7.appspot.com",
  messagingSenderId: "70440297235",
  appId: "1:70440297235:web:5dd247b4b51af903b4f0e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db)
export default db;