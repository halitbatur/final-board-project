import React from "react";

function BoardCard({ board, onDelete ,boarDId}) {
console.log(board)
  return (
    <div className="px-10 my-10 bg-red-800 md:mx-3 border-2 rounded-xl border-black mx-auto justify-center
         align-center w-56 md:w-72">
      <button
        className="border-2 border-black w-[50px] float-right bg-black text-white font-bold mt-4"
        onClick={() => onDelete(boarDId)}
      >
        X
      </button>
      <h1 className="text-2xl font-bold text-white justify-center mx-auto py-3">{board.title}</h1>
      <button className="border-2 border-black mt-10 w-full bg-black text-white font-bold p-2 hover:bg-white
          hover:cursor-pointer hover:text-black">Add Task</button>
    </div>
  );
}

export default BoardCard;

