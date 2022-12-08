import React from 'react';

function BoardList({ board }) {
    console.log(board);
    return(
        <div className="md:flex sm:mx-auto sm:flex-wrap pt-20 md:mx-10 justify-center">
            {board.map( boardObject => <div className="px-10 my-10 bg-red-800 md:mx-3 border-2 rounded-xl border-black mx-auto justify-center
      align-center w-56 md:w-72" key={boardObject.title}> <h1 className="text-2xl font-bold text-white justify-center mx-auto text-center py-3">{boardObject.title}</h1></div>)}
        </div>
    )
}

export default BoardList;
