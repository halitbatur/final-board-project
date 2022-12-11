import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../utils/firebase";
import Spinner from "../Spinner";

export default function TaskComponent() {
  const { id } = useParams();
  const boardId = Number(id);

  const [boardsTasks, setBoardsTasks] = useState(null);
  async function getDocHandler() {
    const docRef = doc(db, "boards", "iUa0ccbWrwNQ13fLt6oh");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().boards[boardId - 1]);
      setBoardsTasks(docSnap.data().boards[boardId - 1]);
    }
  }
  useEffect(() => {
    getDocHandler();
  }, []);
  return boardsTasks ? (
    <div className="h-screen bg-red-300 flex justify-center items-center flex-col gap-32">
      <h3 className="text-3xl font-bold capitalize">{boardsTasks.boardName}</h3>
      <div className="h-3/4 bg-blue-400 flex items-center justify-center">
        <h4 className="text-6xl font-bold ">Tasks should be here !!!!!!!</h4>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
