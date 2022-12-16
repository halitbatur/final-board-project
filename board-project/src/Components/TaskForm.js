import React from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ task, handleTaskChange, handleTaskSubmit, showForm, setShowForm, setNewTask, isUpdate }) {

  const handleAddNewEmptyTask = () => {
    setShowForm(true);
    setNewTask({
      title: '',
      description: '',
      boardId: task.boardId,
      dueDate: '',
      assignee: '',
      isCompleted: false,
      taskId: uuidv4(),
    });
  };

  return (
    <>
      {showForm ?
        (< form onSubmit={() => handleTaskSubmit(task)}
          className="bg-white flex-col  p-5 rounded-lg border m-2 " >

          <div className="flex flex-row items-center justify-center gap-3">
            <label className="font-bold">Title</label>
            <input className="border w-full p-1 md:w-40 rounded-lg " type="text" placeholder="Enter Title"
              onChange={handleTaskChange}
              value={task.title}
              name="title"
            />
          </div>

          <div className="mt-2 flex flex-row items-center justify-center gap-3">
            <label className="font-bold">Date</label>
            <input className="border w-full p-1 md:w-40 rounded-lg" type="date" placeholder="enter a due date" onChange={handleTaskChange}
              value={task.dueDate} name="dueDate"
            />
          </div>

          <div className="mt-2 flex flex-row items-center justify-center gap-3">
            <label className="font-bold">Assignee</label>
            <input className="border w-full p-1 md:w-40 rounded-lg" type="text" placeholder="Assigned for?"
              onChange={handleTaskChange} value={task.assignee}
              name="assignee"
            />
          </div>

          <div className="mt-2 flex flex-row items-center justify-center gap-3">
            <label className="font-bold">Description</label>
            <input className="border w-full p-1 md:w-40 rounded-lg" type="text" placeholder="Task's Description"
              onChange={handleTaskChange}
              value={task.description}
              name="description"
            />
          </div>

          <input className="rounded shadow-lg my-4 w-full bg-purple-900 text-white font-bold p-2 hover:bg-purple-300
          hover:cursor-pointer hover:text-white"
            type="submit"
            value={isUpdate ? "Update" : "Add"}
            onClick={handleTaskSubmit}
          />

          <button onClick={() => setShowForm(false)} className="rounded shadow-lg my-4 w-full bg-purple-900 text-white font-bold p-2 hover:bg-purple-300
          hover:cursor-pointer hover:text-white">Cancel</button>
        </form>

        ) : (
          <button onClick={handleAddNewEmptyTask} className="rounded shadow-lg my-4 w-full bg-purple-900 text-white font-bold p-2 hover:bg-purple-300
          hover:cursor-pointer hover:text-white">Add Task</button>
        )
      }
    </>
  );
}

export default TaskForm;

