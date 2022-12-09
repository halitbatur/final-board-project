import React, { useState } from "react";

function TaskForm() {
    const [ showForm, setShowForm ] = useState(false);
    const handleSubmit = (e) => e.preventDefault();
    

    return(
      <>
      {showForm ?
        (<form onSubmit={handleSubmit} className={"  bg-white p-5 rounded-lg my-4"}>
        <div>
          <label className="font-bold">Title</label>
          <input className="border-2 w-32 md:w-40 border-black placeholder:italic pl-2
            placeholder:pl-0.5" type="text" placeholder="enter a task title" />
        </div>
        <div className="mt-2">
          <label className="font-bold">Due Date</label>
          <input className="border-2 w-32 md:w-40 border-black placeholder:italic pl-2
            placeholder:pl-1" type="date" placeholder="enter a due date" />
        </div>
        <div className="mt-2">
          <label className="font-bold">Assignee</label>
          <input className="border-2 w-32 md:w-40 border-black placeholder:italic pl-2
            placeholder:pl-0.5" type="text" placeholder="enter an assignee" />
        </div>
        <input className="border-2 border-black mt-4 w-20 bg-black text-white hover:bg-white
            hover:cursor-pointer hover:text-red-800"
            type="submit" value="add task" />
        <button onClick={() => setShowForm(false) } className="border-2 border-black mt-4 md:ml-4 w-16 bg-black text-white hover:bg-white
            hover:cursor-pointer hover:text-red-800">cancel</button>
      </form>
      ) : (
        <button onClick={() => setShowForm(true)} className="border-2 border-black my-4 w-full bg-black text-white font-bold p-2 hover:bg-white
        hover:cursor-pointer hover:text-black">Add Task</button>
      )
      }
      
      
      </>
    );
  }

  export default TaskForm;

