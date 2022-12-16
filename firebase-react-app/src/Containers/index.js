import React, { useState } from "react"

const InputContainer = ({ listId , type }) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <input className= "text-gray-700 text-sm mb-1 ml-1 block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white" type="text" placeholder=""/>

        
            <button className="inline-block px-6 py-2.5 bg-emerald-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-400 hover:shadow-lg focus:bg-emerald-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-400 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
            onClick={() => setOpen((prev) => !prev)}>
                {type === "card" ? "+ Add Card" : "Add List"}
            </button>

        </div>
    )
}

export default InputContainer