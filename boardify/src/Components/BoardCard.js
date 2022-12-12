import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import db from "../backend/firebase-config.js";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function BoardCard({ board, onDelete }) {

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    boardId: board.boardId,
    dueDate: '',
    assignee: '',
    isCompleted: false,
    taskId: uuidv4(),
  });

  const handleTaskChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const createTask = async (task) => {
    const boardsRef = doc(db, "boards", board.boardId);
    if (isUpdate) {
      const updatedTasks = tasks.map((t) => {
        if (t.taskId === task.taskId) {
          return task;
        } else {
          return t;
        }
      });
      await updateDoc(boardsRef, {
        tasks: updatedTasks
      });
      setShowForm(false);
      setIsUpdate(false);
    } else {
      await updateDoc(boardsRef, {
        tasks: [...tasks, task]
      });
      setShowForm(false);
    }
  };

  const editTask = async (task) => {
    setNewTask({
      title: task.title,
      description: task.description,
      boardId: board.boardId,
      dueDate: task.dueDate,
      assignee: task.assignee,
      isCompleted: task.isCompleted,
      taskId: task.taskId,
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    createTask(newTask);
    setTasks([...tasks, newTask]);
    setNewTask({
      title: '',
      description: '',
      boardId: board.boardId,
      dueDate: '',
      assignedTo: '',
      isCompleted: false,
      taskId: uuidv4(),
    });
  };

  const deleteTask = async (taskId) => {
    const boardsRef = doc(db, "boards", board.boardId);
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
    await updateDoc(boardsRef, {
      tasks: updatedTasks
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "boards"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === board.boardId) {
          setTasks(doc.data().tasks);
        }
      });
    });
    return unsubscribe;
  }, [board.boardId]);

  return (
    <div className="px-8 mt-10 lg:mb-10 bg-red-800 md:mx-3 border-2 rounded-xl
      border-black mx-auto justify-center align-center w-56 md:w-72">

      <button className="border-2 border-black w-[50px] float-right bg-black
        text-white font-bold mt-4"
        onClick={() => onDelete(board.boardId)}>X
      </button>

      <h1 className="text-2xl font-bold text-white justify-center mx-auto py-3">
        {board.title}
      </h1>

      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => {
          return (
            <TaskCard
              key={index}
              task={task}
              editTask={editTask}
              showForm={showForm}
              deleteTask={deleteTask}
              setShowForm={setShowForm}
              setIsUpdate={setIsUpdate}
              isUpdate={isUpdate}
            />
          );
        })}
      </div>

      <TaskForm
        task={newTask}
        handleTaskChange={handleTaskChange}
        handleTaskSubmit={handleTaskSubmit}
        setShowForm={setShowForm}
        showForm={showForm}
        setNewTask={setNewTask}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />

      <h6 className="text-2xl font-bold text-white justify-center mx-auto pb-3 pt-1">
        {
          tasks.length > 0 && tasks.length === 1 ?
          `${tasks.length} Task` : `${tasks.length} Tasks`
        }
      </h6>
    </div>
  );
}

export default BoardCard;

