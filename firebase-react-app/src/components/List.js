import React, { useState } from "react"
import Card from "./Card"

function List ({title, cards}) {
    const cardsArray = cards?.map((card) => {
     <Card task={card.task} />
    })

    return (
        <form>
        <div>
            <div className="font-bold ml-1 p-2 w-72">
                <h4>{title}</h4>
                {cardsArray}
            </div>
        </div>
        
        </form>
    )
}

export default List;