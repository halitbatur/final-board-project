//! packages
import React from "react";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { tasksCollectionRef } from "../libs/fireStore.collections";
import { toast } from "react-toastify";

//! function component
const Form = () => {
  const [title, setTitle] = React.useState();
  const [info, setInfo] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const tasksCollectionRef = collection(db, "tasks");
    await addDoc(tasksCollectionRef, {
      title,
      info,
    })
      .then((res) => {
        toast.success("new task added successfully", {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="center w-full max-w-lg  " onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Title
          </label>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="grid-first-name"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            required
          ></textarea>
           <label for="Date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
           <input type="date" id="date" name="date"></input>
           <label for="DueDate"class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date:</label>
           <input type="date" id="DueDate" name="DueDate"></input>
           <input type="checkbox" id="done" name="donetask" value="Done"></input>
           <label for="done"> The task is done </label><br></br>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        submit
      </button>
    </form>
  );
};

export default Form;
