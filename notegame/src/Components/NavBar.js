import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import pan from "./pan.jpg"

export default function NavBar() {
  return (
    <>
      {/* <nav classNameName="navBarContainer">
        <h1>Recipes</h1>
            <ul>
                 <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/teammembers">Team members</Link>
                </li>
              
            </ul>
       </nav> */}
       

      <nav className="navBarContainer shadow-xl p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
     
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
          <img
              src={pan}
              class="h-6 mr-3 sm:h-10 rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Recipe Note Board
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {/* <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li> */}
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent fa fa-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent fa fa-address-card-o"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/teammembers"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent fa fa-group"
                >
                  Team-Members
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
