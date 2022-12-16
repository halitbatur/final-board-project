import React, { useState } from "react";
import { Link } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { toast } from "react-toastify";

import { db } from "../libs/firebase-config";

export default function Card({ tasks }) {
  const [layout, setLayout] = React.useState(1);

  //! delete article
  const handleDelete = async (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const docRef = doc(db, "tasks", id);
            deleteDoc(docRef).then((res) => {
              toast.success("task Deleted successfully", {
                position: "top-left",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
          },
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });
  };

  return (
    <>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="w-full">
          <br />
          <br />
          <br />

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => setLayout(1)}
          >
            {" "}
            layout 1
          </button>
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => setLayout(3)}
          >
            layout 2
          </button>
        </div>

        {tasks.map((task, index) => (
          <div
            // className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            className={`my-1 px-1 w-full md:w-${layout}/2 lg:my-4 lg:px-4 lg:w-${layout}/3`}
            key={index}
          >
            <article className="overflow-hidden rounded-lg shadow-lg">
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    {task.data.title}
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">11/1/19</p>
              </header>
              <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    {task.data.info}
                  </a>
                </h1>
              </div>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Delete
                </button>
                <Link to={`/todos/${task.id}`}>
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Edit
                  </button>
                </Link>

                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p className="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
