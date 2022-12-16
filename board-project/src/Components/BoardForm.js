import React from "react";

function BoardForm({onSubmitt,onChange,newBoard}) {
 
  return (
    <div className="flex justify-center items-center w-full ">
      <form
        className="flex flex-col justify-center items-center border-2 rounded-lg m-5 mt-8 shadow-lg
      align-center max-w-sm md:max-w-md text-xl px-10 pb-10 bg-purple-700" 
      onSubmit={onSubmitt}
      >
        <h1 className="text-center text-white py-5 font-bold text-3xl">Create your Board</h1>
        <input
           className="mr-2 w-3/4 rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
          value={newBoard.title}
          type="text"
          name="title"
          placeholder="Board Title"
          onChange={onChange}
        />
        <input
         className="flex justify-center items-center rounded shadow-lg my-4 w-2/4 bg-purple-900 text-white font-bold p-2 hover:bg-purple-300"
          type="submit"
          value="Create"
        />
      </form>
    </div>
  );
}

export default BoardForm;

