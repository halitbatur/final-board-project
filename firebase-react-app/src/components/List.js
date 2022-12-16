import React from "react"
import { Draggable, Droppable } from "react-beautiful-dnd"



function List ({list, index}) {
    return (
        <Draggable draggableId={list.id} index={index}>
{
    (provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
            <div>
            List Title
             </div>
             <div>
                <Droppable droppableId={list.id} type="task">
                {
     (provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((list, index) => {
                return <List key={list.id} list={list} index={index}/>
            })

            } 
        </div>
               )}
                </Droppable>
             </div>
        </div>
    )
}
        </Draggable>
    )
    
    }



export default List;