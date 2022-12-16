//! packages
import React from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { tasksCollectionRef } from "../libs/fireStore.collections";
import { toast } from "react-toastify";
import { db } from "../libs/firebase-config";
import { useParams, useNavigate } from "react-router-dom";

//! function component
const Form = () => {
  //! navigate the rout after submit
  const navigate = useNavigate();
  //!   params
  const params = useParams();
  const todoId = params.id;

  const [title, setTitle] = React.useState();
  const [info, setInfo] = React.useState();

  React.useEffect(() => {
    console.log("im in useEff: id;:", todoId);
    const docRef = doc(db, "tasks", todoId);
    getDoc(docRef)
      .then((doc) => {
        console.log("doc.data", doc.data());
        setTitle(doc.data().title);
        setInfo(doc.data().info);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "tasks", todoId);

    updateDoc(docRef, { title, info })
      .then(() => {
        toast.success("task updated successfully", {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="w-full  " onSubmit={handleUpdate}>
      <h1>update tasks</h1>
      <p>detail about usr id : {todoId}</p>
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
