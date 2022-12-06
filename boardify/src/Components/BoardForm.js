import React from "react";

function BoardForm() {
    return (
        <div className="pt-20">
          <form className="border-4 border-black mx-auto justify-center align-center max-w-sm md:max-w-md text-xl px-10 pb-10">
          <h1 className="text-center py-5 font-bold">Board Creation</h1>
            <input className="border-4 border-black placeholder:italic pl-2 placeholder:pl-1" type="text" name="Board-Title" placeholder="enter a board title"/> 
          <input className="px-3 py-1 bg-black text-white hover:bg-red-800 hover:cursor-pointer hover:font-bold" type="submit" value="Submit" />
          </form>
        </div>
    )
}

export default BoardForm;