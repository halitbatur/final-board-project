import React from "react";
import BoardCard from "./BoardCard";

function BoardContainer({ boards, onDelete }) {
    
  return (
    <div className="sm:border-0 md:border-2 md:border-black mb-10 md:px-10 mx-10 rounded-[1%] min-h-[550px] grid md:gap-x-3 md:grid-cols-2 lg:grid-cols-3 ">
      {boards.map((board) => {
        return (
            <BoardCard  key={board.boardId} board={board} onDelete={onDelete} />
        );
      })}
    </div>
  );
}

export default BoardContainer;

