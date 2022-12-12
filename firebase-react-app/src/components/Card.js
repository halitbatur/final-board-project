import React, { useState }from "react"

function Card({task}) {

    return (
        <div>

<a href="#" className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<p className="text-gray-700 text-sm mb-1 ml-1">{task}</p>

</a>
        </div>

    
    )}

export default Card;