import React, { useState, useEffect } from "react";
import FinishedTaskCard from "./FinishedTasksCard";
import db from "../backend/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

const FinishedTasks = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "boards"), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        if (docChange.type === "added") {
          const boardId = docChange.doc.id;
          const boardObj = { ...docChange.doc.data(), boardId };
          setBoards((prevBoardsList) => [...prevBoardsList, boardObj]);
        }
      });
    });
  }, []);

  return (
    <div
      className="sm:border-0 md:border-2 mt-8 md:border-black mb-10 md:px-10
      mx-10 rounded-[1%] min-h-[550px] grid md:gap-x-3 md:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4"
    >
      {boards.map((board) => {
        return (
          <div className="px-8 my-10 lg:mb-10 bg-red-800 md:mx-3 border-2 rounded-xl
            border-black mx-auto justify-center align-center w-56 md:w-72">
            <h1 className="text-white text-2xl text-center"> {board.title} </h1>
            {board.tasks.map((task) => {
              return(
                task.isCompleted ? <FinishedTaskCard task={task} /> : null
              )
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FinishedTasks;
