import React from "react";
import {useState} from "react";

function TaskForm(){
    const [enteredTitle, setEnteredTitle] = useState("")
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
    return <form>
        <div>
            <div>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div>
                <label>Body</label>
                <textarea  type="text" rows="4" cols="30"></textarea>
            </div>
            <div>
                <label>Due Date</label>
                <input type="date" min="2022-1-1" max="2022-12-31" />
            </div>
        </div>
        <div>
            <button type="submit" >Add Task</button>
        </div>
    </form>
}

export default TaskForm;