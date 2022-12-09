import React from "react";
import BoardCard from "./BoardCard";

function BoardContainer({ boards, onDelete }) {
// board.map((brd,idx)=> console.log(idx))

  return (
    <div className="sm:border-0 md:border-2 p-4 md:border-black mx-6 rounded-[2%] min-h-[550px] grid gap md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {boards.map((board,index ) => (
        <BoardCard boarDId={index} key={board.title} board={board} onDelete={onDelete} />

      ))}

    </div>
  );
}

export default BoardContainer;

