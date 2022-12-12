import React from "react";

export default function Board({ props }) {
  return (
    <div
      className=" bg-indigo-50 capitalize text-center flex items-center justify-center
    border-indigo-100 p-10 rounded-lg text-indigo-800 border shadow-sm cursor-pointer w-full h-full hover:shadow-md hover:bg-indigo-100 hover:border-indigo-200"
    >
      <h3 className="font-bold">{props.name}</h3>
    </div>
  );
}
