import React, { useState } from "react";
import BoardList from "./BoardList";

function BoardForm() {
  const [formInputs, setFormInputs] = useState({
    title: "",
  });

  const handleChange = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [boardInputs, setBoardInputs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoardInputs((prev) => [...prev, formInputs]);
    setFormInputs({ title: "" });
    //e.target.reset()
  };

  //console.log(boardInputs);

  return (
    <>
    <div className="pt-20">
      <form
        onSubmit={handleSubmit}
        className="border-4 border-black mx-auto justify-center
      align-center max-w-sm md:max-w-md text-xl px-10 pb-10"
      >
        <h1 className="text-center py-5 font-bold">Board Creation</h1>
        <input
          className="border-4 border-black placeholder:italic pl-2 placeholder:pl-1"
          type="text"
          name="title"
          placeholder="enter a board title"
          value={formInputs.title}
          onChange={handleChange}
        />
        <input
          className="px-3 py-1 bg-black text-white hover:bg-red-800 hover:cursor-pointer hover:font-bold"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
    <div>
      <BoardList board={boardInputs}  />
    </div>
    </>
  );
}

export default BoardForm;
