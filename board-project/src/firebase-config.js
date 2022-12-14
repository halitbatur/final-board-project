import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ4cvUcbdBpsiuaoWvH0tmP-tzF97XEFk",
  authDomain: "final-board-f5afe.firebaseapp.com",
  projectId: "final-board-f5afe",
  storageBucket: "final-board-f5afe.appspot.com",
  messagingSenderId: "987746025283",
  appId: "1:987746025283:web:4650ab0035ccdc92c2b9f6",
  measurementId: "G-WFZ20YT7V8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);