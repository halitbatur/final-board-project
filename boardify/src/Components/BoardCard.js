import React from "react";
import TaskForm from "./TaskForm";

function BoardCard({ board, onDelete ,boardId}) {

  return (
    <div className="px-8 my-10 bg-red-800 md:mx-3 border-2 rounded-xl border-black mx-auto justify-center
         align-center w-56 md:w-72">
      <button
        className="border-2 border-black w-[50px] float-right bg-black text-white font-bold mt-4"
        onClick={() => onDelete(boardId)}
      >
        X
      </button>
      <h1 className="text-2xl font-bold text-white justify-center mx-auto py-3">{board.title}</h1>
      <TaskForm />
    </div>
  );
}

export default BoardCard;

