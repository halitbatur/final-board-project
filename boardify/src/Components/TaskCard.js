import React from 'react'

const TaskCard = ({task}) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.desc}</p>
      <p>{task.assignee}</p>
      <p>{task.dueDate}</p>
      <p>{task.isCompleted}</p>      
    </div>
  )
}

export default TaskCard