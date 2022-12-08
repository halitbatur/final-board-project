import React from "react";

function BoardForm({onSubmitt,onChange,newBoard}) {
 
  return (
    <div className="pt-2">
      <form
        className="border-4 border-black mx-auto justify-center
      align-center max-w-sm md:max-w-md text-xl px-10 pb-10 mt-5"
      onSubmit={onSubmitt}
      >
        <h1 className="text-center py-5 font-bold">Board Creation</h1>
        <input
          className="border-4 border-black placeholder:italic pl-2
          placeholder:pl-1"
          value={newBoard.title}
          type="text"
          name="title"
          placeholder="enter a board title"
          onChange={onChange}
        />
        <input
          className="px-3 py-1 bg-black text-white hover:bg-red-800
          hover:cursor-pointer hover:font-bold"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default BoardForm;

