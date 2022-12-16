import React from "react";

function BoardForm({onSubmitt,onChange,newBoard}) {
 
  return (
    <div className="mt-6 mx-80 card max-w-xl  rounded-xl bg-[#2c2c2c] shadow-xl">
      <form
        className="   mx-auto justify-center
      align-center max-w-sm md:max-w-md text-xl px-10 pb-10 mt-5"
      onSubmit={onSubmitt}
      >
        <h1 className="text-center  py-5 font-bold text-[#b5b5b5]">Board Creation</h1>
        <input
          className="w-52 md:w-64 border-2 rounded-md bg-[#EFEFEF] border-[#343434] placeholder:font-extralight text-[#616161] text-base p-2 pl-2
          placeholder:pl-1"
          value={newBoard.title}
          type="text"
          name="title"
          placeholder="enter a board title"
          onChange={onChange}
        />
        <input
          className="btn ml-3 rounded-md text-xs w-30 bg-[#6BAF5B] hover:bg-[#262626] hover:shadow-2xl transition 
          hover:cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default BoardForm;

