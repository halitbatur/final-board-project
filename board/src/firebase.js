// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; //used to add data to db
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA55qv63sqVrxRCjq-n1cy4BU3sOplKMiU",
  authDomain: "board-project-352ef.firebaseapp.com",
  projectId: "board-project-352ef",
  storageBucket: "board-project-352ef.appspot.com",
  messagingSenderId: "635395136599",
  appId: "1:635395136599:web:47e5ef760993e7ed2dd712",
  measurementId: "G-NLC55FCQ8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const analytics = getAnalytics(app);
