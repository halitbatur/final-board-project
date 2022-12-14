import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import db from "../../../utils/firebase";
import Spinner from "../Spinner";
import TaskForm from "../../forms/TaskForm";

export default function TaskComponent() {
  const { id } = useParams();
  const [boardClick, setBoardClick] = useState(false);

  // const boardId = Number(id);

  const [boardsTasks, setBoardsTasks] = useState(null);
  async function getDocHandler() {
    console.log('')
    const docRef = doc(db, "boards", `${id}`, );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setBoardsTasks(docSnap.data());
      console.log("tasks", docSnap.data())
    }
  }
  useEffect(() => {
    getDocHandler();
  }, []);
  useEffect(() => {
    console.log(boardsTasks);
  }, [boardsTasks]);


  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    if (!id) return
    // getDocs(collection(db, `boards/${id}/tasks`))
    // /boards/${id}/tasks
    const snapshot = onSnapshot(doc(db, `boards/${id}/tasks/78mcwlYLHvTQYatt0aMb`), (next) => {
      setTasks(next.data().title)
    })
    return () => snapshot()
  }, [id])

  if (!boardsTasks) return <Spinner />

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-32 bg-red-300">
      <h3 className="text-3xl font-bold capitalize">{boardsTasks.name}</h3>
      <div className="flex items-center justify-center bg-blue-400 h-3/4">
        <h4 className="text-6xl font-bold ">{tasks}</h4>
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
  )
}
