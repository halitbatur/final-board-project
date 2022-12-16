import { collection } from "firebase/firestore";
import { db } from "./firebase-config";

export const tasksCollectionRef = collection(db, "tasks");
