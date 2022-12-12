import React from "react";
import BoardForm from "../forms/BoardForm";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebase";
import { useEffect } from "react";
import Board from "./Board";

// import { async } from "@firebase/util";

// import { async } from "@firebase/util";

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
    <div className="relative flex flex-col items-center justify-center gap-10 bg-gray-50">
      <button
        type="button"
        onClick={() => getDocHandler()}
        className="px-4 py-2 font-medium text-white transition-colors duration-200 bg-indigo-500 rounded shadow-lg outline-none shadow-indigo-200 active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed"
      >
        Create new Workspace
      </button>
      <BoardForm trigger={boardClick} setTrigger={setBoardClick} />
      {boards && <Board props={boards} />}
    </div>
  );
}
