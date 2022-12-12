import React, { useState } from "react";
import { useEffect } from "react";
// import {firebase} from "../../utils/firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import { async } from "@firebase/util";
import db from "../../utils/firebase";

export default function BoardForm(props) {
  async function addingNotes(title) {
    await addDoc(collection(db, "boards"), {
      name: title,
      state: "CA",
      country: "USA",
    });
  }

  const [title, setTitle] = useState('')


  const saveDoc = (e) => {
    e.preventDefault()

    addingNotes(title)
  }
  
  return props.trigger ? (
    <div className="absolute z-10 w-full max-w-xs translate-y-1/2 top-1/2 backdrop-blur-3xl">
      <form className="relative px-8 pt-20 pb-8 mb-4 bg-white rounded shadow-md" onSubmit={saveDoc}>
        <button
          onClick={() => props.setTrigger(false)}
          type="button"
          className="absolute top-0 right-0 inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="w-6 h-6"
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
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
            id="username"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 font-medium text-indigo-500 transition-colors duration-200 border border-indigo-100 rounded outline-none bg-indigo-50 active:scale-95 hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed"
        >
          Add
        </button>
      </form>
    </div>
  ) : (
    ""
  );
}
