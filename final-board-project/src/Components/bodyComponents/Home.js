import React from 'react'
import TaskForm from './TaskForm'

export default function Home() {
  return (
    <div>
    <div>Home</div>
    {/* this board div is just a filler, later it will be filled */}
    <div>board div</div>
    <div>
      <label>Add your task here</label>
    <TaskForm/>
    </div>
    </div>
  )
}
