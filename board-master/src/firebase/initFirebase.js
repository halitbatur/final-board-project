import {initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// import 'firebase/analytic';
import 'firebase/performance';


const firebaseConfig = {
  apiKey: "AIzaSyD6nQioxOF4MJkOn2SduAOJptPiTnY0BAM",
  authDomain: "board-master-cdf6c.firebaseapp.com",
  projectId: "board-master-cdf6c",
  storageBucket: "board-master-cdf6c.appspot.com",
  messagingSenderId: "681011224873",
  appId: "1:681011224873:web:5d1586617d24b6d52c1738",
  measurementId: "G-M1F5DPRM49"
};


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  export default app;