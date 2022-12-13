import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-100 w-64 h-screen fixed top-0 left-0">
      <aside className="grid justify-center">
        <div className=" text-3xl p-5 font-bold">Work Space</div>
        <div className="w-10 m-3">
          <div className="m-3 text-xl font-semibold flex space-x-4">
            <i class="fa-solid fa-house"></i> <Link to="/">Home</Link>
          </div>
          <div className="m-3 text-xl font-semibold flex space-x-4">
            <i class="fa-solid fa-plus"></i>{" "}
            <Link to="/add" className="px-1 ">
              Add
            </Link>
          </div>
          <div className="m-3 text-xl font-semibold flex space-x-4">
            <i class="fa-solid fa-eye"></i> <Link to="/overview">Overview</Link>
          </div>
          <div className="m-3 text-xl font-semibold flex space-x-4">
            <i class="fa-solid fa-circle-info"></i>
            <Link to="/about" className="px-1">
              About
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
