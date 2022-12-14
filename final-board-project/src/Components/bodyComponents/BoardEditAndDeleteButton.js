import React from "react";

function BoardEditAndDeleteButton(){
return (
    <div>
        <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded font-medium text-sm px-5 py-2.5 dark:focus:ring-yellow-900" type="button">Edit</button>
        <button className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded text-sm px-5 py-2.5 dark:focus:ring-yellow-900" type="button">Delete</button>
    </div>
)
}
export default BoardEditAndDeleteButton;