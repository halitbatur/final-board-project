import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../utils/firebase";
import Spinner from "../Spinner";
import TaskForm from "../../forms/TaskForm";

export default function TaskComponent() {
  const { id } = useParams();
  const [boardClick, setBoardClick] = useState(false);

  // const boardId = Number(id);

  const [boardsTasks, setBoardsTasks] = useState(null);
  async function getDocHandler() {
    const docRef = doc(db, "boards", `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setBoardsTasks(docSnap.data());
    }
  }
  useEffect(() => {
    getDocHandler();
  }, []);
  useEffect(() => {
    console.log(boardsTasks);
  }, [boardsTasks]);
  return boardsTasks ? (
    <div className="h-screen bg-red-300 flex justify-center items-center flex-col gap-32">
      <h3 className="text-3xl font-bold capitalize">{boardsTasks.name}</h3>
      <div className="h-3/4 bg-blue-400 flex items-center justify-center">
        <h4 className="text-6xl font-bold ">Tasks should be here !!!!!!!</h4>
        <button
          type="button"
          onClick={() => setBoardClick(true)}
          className="px-4 py-2 font-medium text-white transition-colors duration-200 bg-indigo-500 rounded shadow-lg outline-none shadow-indigo-200 active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed"
        >
          Add Task
        </button>
        <TaskForm
          trigger={boardClick}
          setTrigger={setBoardClick}
          boardId={id}
        />
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
