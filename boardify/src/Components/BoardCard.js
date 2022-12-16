import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import db from "../backend/firebase-config.js";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function BoardCard({ board, onDelete }) {
  const [completed, setCompleted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    boardId: board.boardId,
    dueDate: "",
    assignee: "",
    isCompleted: false,
    taskId: uuidv4(),
  });
  const boardsRef = doc(db, "boards", board.boardId);

  const handleSortingListChange = (e) => {
    if (e.target.value === "due_date") {
      let sorted = tasks.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));
      setTasks([...sorted]);
    } else if (e.target.value === "asc") {
      let sorted = tasks.sort((a, b) => (a.title > b.title ? 1 : -1));
      setTasks([...sorted]);
    } else if (e.target.value === "desc") {
      let sorted = tasks.sort((a, b) => (a.title < b.title ? 1 : -1));
      setTasks([...sorted]);
    }
  };

  const handleTaskChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  
  const createTask = async (task) => {
    if (isUpdate) {
      const updatedTasks = tasks.map((t) => {
        if (t.taskId === task.taskId) {
          return task;
        } else {
          return t;
        }
      });
      await updateDoc(boardsRef, {
        tasks: updatedTasks,
      });
      setShowForm(false);
      setIsUpdate(false);
    } else {
      await updateDoc(boardsRef, {
        tasks: [...tasks, task],
      });
      setShowForm(false);
    }
  };

  const handleIsCompleted = async (task) => {
    const boardsRef = doc(db, "boards", board.boardId);
    const updatedTasks = tasks.map((t) => {
      if (t.taskId === task.taskId) {
        return { ...t, isCompleted: !task.isCompleted };
      } else {
        return t;
      }
    });
    await updateDoc(boardsRef, { tasks: updatedTasks });

    setCompleted(() => !completed); 
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
      title: "",
      description: "",
      boardId: board.boardId,
      dueDate: "",
      assignedTo: "",
      isCompleted: false,
      taskId: uuidv4(),
    });
  };

  const deleteTask = async (taskId) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
    await updateDoc(boardsRef, {
      tasks: updatedTasks,
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "boards"),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === board.boardId) {
            setTasks(doc.data().tasks);
          }
        });
      }
    );
    return unsubscribe;
  }, [board.boardId]);

  return (
    <div
      className="px-8 mt-10 lg:mb-10 bg-[#262626] md:mx-3 border-2 rounded-xl
      border-black mx-auto justify-center align-center w-56 md:w-72"
    >
      <button
        className=" rounded  w-[50px] float-right bg-[#ff3b3b]
        text-white font-bold mt-4"
        onClick={() => onDelete(board.boardId)}
      >
        X
      </button>

      <select className="text-[#262626] rounded mt-3" onChange={handleSortingListChange}>
        <option value="due_date">due Date</option>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>

      <h1 className="text-2xl font-bold text-white justify-center mx-auto py-3">
        {board.title}
      </h1>

      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => {
          return (
            !task.isCompleted ?
            <TaskCard
              handleIsCompleted={handleIsCompleted}
              key={index}
              task={task}
              editTask={editTask}
              showForm={showForm}
              deleteTask={deleteTask}
              setShowForm={setShowForm}
              setIsUpdate={setIsUpdate}
              isUpdate={isUpdate}
            /> 
            : null
          
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
        {tasks.length > 0 && tasks.length === 1
          ? `${tasks.length} Task`
          : `${tasks.length} Tasks`}
      </h6>
    </div>
  );
}

export default BoardCard;
