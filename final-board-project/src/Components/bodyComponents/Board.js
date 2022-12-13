import React from "react";

export default function Board({ props }) {
  return (

    <div className="flex flex-col items-center justify-center w-full h-full p-10 text-center text-indigo-800 capitalize border border-indigo-100 rounded-lg shadow-sm cursor-pointer bg-indigo-50 hover:shadow-md hover:bg-indigo-100 hover:border-indigo-200">
      <h3 className="font-bold">{props.name}</h3>
    </div>
  );
}
