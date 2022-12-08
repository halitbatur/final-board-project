import React from "react";
import { useEffect, useState } from "react";
import {firebase} from "../../utils/firebase"

export default function BoardForm(props) {

  // const [boards, setBoards] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const ref = firebase.firestore().collection("fianl-board-project")
 
  // useEffect(()=>{

  // },[])
  // if(loading){
  //   return <h1>Loading...</h1>
  // }
  
  return props.trigger ? (
    <div className="w-full max-w-xs absolute top-1/2 translate-y-1/2 z-10 backdrop-blur-3xl">
      <form className="bg-white shadow-md rounded px-8 pt-20 pb-8 mb-4 relative">
        <button
          onClick={() => props.setTrigger(false)}
          type="button"
          className="bg-white absolute top-0 right-0 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mb-4">
          <input
            type="text"
            placeholder="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          "
            id="username"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-50 outline-none border border-indigo-100 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
        >
          Add
        </button>
      </form>
    </div>
  ) : (
    ""
  );
}
