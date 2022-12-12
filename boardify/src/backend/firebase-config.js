// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWDb9qqpKj2NYs3K9Cw6qjlToEFl9RRAA",
  authDomain: "boredify-ce61b.firebaseapp.com",
  projectId: "boredify-ce61b",
  storageBucket: "boredify-ce61b.appspot.com",
  messagingSenderId: "180921146737",
  appId: "1:180921146737:web:fd4bf14f6c9eb93573aad0",
  measurementId: "G-NJWKHVZH4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export default db ; 
