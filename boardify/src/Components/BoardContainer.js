import React from "react";
import BoardCard from "./BoardCard";

function BoardContainer({ board, onDelete }) {
// board.map((brd,idx)=> console.log(idx))

  return (
    <div className="sm:border-0 md:border-2 p-4 md:border-black mx-6 rounded-[1%] min-h-[550px] grid gap md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {board.map((boardObj,idx ) => (
        <BoardCard boarDId={idx} key={boardObj.title} board={boardObj} onDelete={onDelete} />

      ))}

    </div>
  );
}

export default BoardContainer;

