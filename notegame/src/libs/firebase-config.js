import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGngJlKRo3zFzOjAjtIMxEME2Drt5kzhM",
  authDomain: "kanban-board-example.firebaseapp.com",
  projectId: "kanban-board-example",
  storageBucket: "kanban-board-example.appspot.com",
  messagingSenderId: "229729724647",
  appId: "1:229729724647:web:3ea927fea2befa3c781a42",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
