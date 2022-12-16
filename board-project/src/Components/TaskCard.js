import React from 'react'

const TaskCard = ({
  task,
  deleteTask,
  editTask,
  showForm,
  setShowForm,
  isUpdate,
  setIsUpdate}) => {

  const handleDelete = () => {
    deleteTask(task.taskId);
  };

  const handleEdit = () => {
    setShowForm(!showForm);
    setIsUpdate(!isUpdate);
    editTask(task);
  };

  return (
    <div className='bg-white p-5 rounded-lg my-1 border w-full shadow-lg  '>
      <div className='sm:flex-row flex justify-between'>
        <h1 className="font-bold text-black text-l">{task.title}</h1>
        <button
          className="text-white font-bold -mt-0 hover:text-purple-700 hover:bg-white border px-2 bg-purple-700"
          onClick={handleDelete}> X </button>
      </div>

      { task.description ? (
          <p className="pt-2 text-black leading-4">{task.description}</p>
        ) : null
      }

      {task.dueDate ? (
          <div className='flex pt-2 '>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32ZM352,212a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,
            4H356a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,
            4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,
            4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm0,80a4,4,0,0,
            1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Z"/>
            <path d="M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z"/></svg>
            <p className="pl-2">{task.dueDate}</p>
          </div>
        ) : null
      }

      <form className='pt-2 m-1 flex justify-center items-center gap-5'>
        <input
          className="accent-purple-700"
          type="checkbox"
          id=""
          name="completed"
          value={task.isCompleted} />
        <label htmlFor="completed">Completed</label>
      </form>

      <div className='flex-wrap md:flex md:justify-between'>
        {task.assignee ? (
          <div className='flex flex-col pt-2 justify-center items-center'>
            <p className="text-l -mb-3">assigned to</p>
            <p className="border-2  rounded-2xl text-center
            align-middle mt-4 w-16 px-4 text-white mt-4 w-44  
            text-black">
              {task.assignee}
            </p>
          </div>
        ) : null }

        <button className="rounded shadow-lg my-4 w-full bg-purple-900 text-white font-bold p-2 hover:bg-purple-300
          hover:cursor-pointer hover:text-white" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default TaskCard;

