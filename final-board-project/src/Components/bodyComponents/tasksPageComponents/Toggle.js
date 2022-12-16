import React from "react";
import {useState} from 'react';


export default function Toggle() {

    const [toggleViewMode, setToggleViewMode] = useState(false);


    return (

        <div>
  <div className="flex justify-end p-5">
  <button
    className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
    onClick={() => setToggleViewMode(!toggleViewMode)}
  >
    {!toggleViewMode ? 'grid' : 'list'}
  </button>
</div>
</div>
    )
}

