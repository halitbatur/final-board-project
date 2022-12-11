import React from "react";
import BoardForm from "../forms/BoardForm";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebase";
import { useEffect } from "react";
import Board from "./Board";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

export default function Home() {
  const [boards, setBoards] = useState(null);
  async function getDocHandler() {
    const docRef = doc(db, "boards", "iUa0ccbWrwNQ13fLt6oh");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().boards);
      setBoards(docSnap.data().boards);
    }
  }
  useEffect(() => {
    getDocHandler();
  }, []);
  const [boardClick, setBoardClick] = useState(false);
  return (
    <div className=" flex items-center justify-center flex-col relative bg-gray-50 gap-32">
      <button
        onClick={() => setBoardClick(true)}
        className="px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
      >
        Create new Workspace
      </button>
      <BoardForm trigger={boardClick} setTrigger={setBoardClick} />
      <div className="flex gap-16 ">
        {boards ? (
          boards.map((ele) => {
            return (
              <Link to={`/tasks/${ele.id}`} className="h-48 w-48" key={ele.id}>
                <Board props={ele} />
              </Link>
            );
          })
        ) : (
          <div className="relative mt-24">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}
