import React from "react";

export default function Board({ props }) {
  return (
    <div
      className=" bg-indigo-50
    border-indigo-100 p-10 rounded-lg text-indigo-700 border shadow-sm cursor-pointer "
    >
      <h3 className="font-bold">{props.country}</h3>
      <p>{props.name}</p>
      <p>{props.state}</p>
    </div>
  );
}
