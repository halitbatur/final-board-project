import { initializeApp } from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAB0crPOif5Z33O51XU3NqC0CwVZnAibes",

  authDomain: "final-board-project.firebaseapp.com",

  projectId: "final-board-project",

  storageBucket: "final-board-project.appspot.com",

  messagingSenderId: "737466728156",

  appId: "1:737466728156:web:a12c06224ffe092ca67e19",

  measurementId: "G-3GVNXDJLME",
};

const app = initializeApp(firebaseConfig);

const db  = app.firestore()

const boardRef = db.collection("boards")
const listRef = db.collection("lists");

export { boardRef, listRef}
