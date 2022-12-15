import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYiDYaAOiGQmGWCkDb78wDKnfogB9x4WM",
  authDomain: "kanban-d5fae.firebaseapp.com",
  projectId: "kanban-d5fae",
  storageBucket: "kanban-d5fae.appspot.com",
  messagingSenderId: "826238677802",
  appId: "1:826238677802:web:c5d5778f2b7c6e4301a453",
  measurementId: "G-T9FLGF1EN5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);