// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzHX0lggFXJyj5n5zrkmbot0PWzodM32g",
    authDomain: "board-2fa57.firebaseapp.com",
    projectId: "board-2fa57",
    storageBucket: "board-2fa57.appspot.com",
    messagingSenderId: "224198968044",
    appId: "1:224198968044:web:07a1c31fe546c310b3dbc9",
    measurementId: "G-0CCF7VYXX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app)