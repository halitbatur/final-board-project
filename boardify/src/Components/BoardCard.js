import React, {
  useState
} from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import  db  from "../backend/firebase-config.js";
import { collection, addDoc, onSnapshot,deleteDoc, doc, updateDoc, setDoc  } from "firebase/firestore";

function BoardCard({ board, onDelete}) {

  const [tasks , setTasks] = useState([]);

  const [newTask , setNewTask] = useState({
    title: '',
    description: '',
    boardId: board.boardId,
    dueDate: '',
    assignee: '',
    isCompleted: false,
    taskId: 0,
  });

  const handleTaskChange = (e) => {
    console.log({ [e.target.name]: e.target.value});
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const createTask = async (task) => {
    // try {
    //   // update docs in firebase
    //   const docRef = await addDoc(collection(db, "boards", board.boardId, "tasks", task.taskId), {
    //     title: task.newTask.title,
    //     description: task.newTask.description,
    //     boardId: task.newTask.boardId,
    //     dueDate: task.newTask.dueDate,
    //     assignee: task.newTask.assignee,
    //     isCompleted: task.newTask.isCompleted,
    //     taskId: task.newTask.taskId,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

      const boards = collection(db, "boards");
       const boardRef = doc(boards, board.boardId);
      
       console.log(boardRef);
      // const tasks = collection(boardRef, "tasks");
      // const taskRef = doc(tasks, task.taskId);
      // await setDoc(taskRef, {
      //   title: task.title,
      //   description: task.description,
      //   boardId: task.boardId,
      //   dueDate: task.dueDate,
      //   assignee: task.assignee,
      //   isCompleted: task.isCompleted,
      //   taskId: task.taskId,
      // });
    
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    // create a new task in the firebase database
    createTask(newTask);
    setTasks([...tasks, newTask]);
    setNewTask({
      title: '',
      description: '',
      boardId: board.boardId,
      dueDate: '',
      assignedTo: '',
      isCompleted: false,
      taskId: 0,
    });
  };
  
  console.log(tasks);

  return (
    <div className="px-8 my-10 bg-red-800 md:mx-3 border-2 rounded-xl
      border-black mx-auto justify-center align-center w-56 md:w-72">
      <button
        className="border-2 border-black w-[50px] float-right bg-black text-white font-bold mt-4"
        onClick={() => onDelete(board.boardId)}
      >
        X
      </button>
      <h1 className="text-2xl font-bold text-white justify-center mx-auto py-3">{board.title}</h1>
      < TaskForm task={newTask} handleTaskChange={handleTaskChange} handleTaskSubmit={ handleTaskSubmit } />
    
     <div className="flex flex-col gap-2">
       {
        tasks.map((task , index) => {
          return (
            < TaskCard key={index} task = {
              task
            }
            />
          )
        })
       }
      </div>

      <div className="flex justify-between">
        <h6>{tasks.length > 0 ? tasks.length : '0'} Tasks</h6>
      </div>
    </div>
    
     
  );
}

export default BoardCard;

