import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import db from "../backend/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

const FinishedTasks = () => {
  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => {
    boards.map((board) => {
      onSnapshot(
        collection(db, "boards", board.boardId, "tasks"),
        (snapshot) => {
          snapshot.docChanges().forEach((docChange) => {
            if (docChange.type === "added") {
              const taskId = docChange.doc.id;
              const taskObj = { ...docChange.doc.data(), taskId };
              setTasks((prevTasksList) => [...prevTasksList, taskObj]);
            }
          });
        }
      );
    });
  }, [boards]);

  console.log(boards);
  console.log(boards.tasks);

  return (
    <div
      className="sm:border-0 md:border-2 mt-8 md:border-black mb-10 md:px-10
      mx-10 rounded-[1%] min-h-[550px] grid md:gap-x-3 md:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4"
    >
      {tasks.map((task) => {
        return (
          <div>
            <h1>hello mr</h1>
          </div>
        );
      })}
    </div>
  );
};

export default FinishedTasks;
