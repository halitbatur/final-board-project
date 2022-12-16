import "./App.css";

import { Routes, Route } from "react-router";
import Home from "./page/Home";
import AddProject from "./page/AddProject";
import Projects from "./page/Projects";
import SideBar from "./components/Navigation/SideBar";
import Login from "./page/Login";
import Profile from "./page/Profile";
import { motion } from "framer-motion";

import app from './firebase/initFirebase'

console.log(app);


function App() {
  return (
    <div className="App  dark:bg-[#121212]  min-h-screen w-full flex justify-start ">
      <div>
        <div className=" h-full relative overflow-hidden  bg-[#6200ee] w-52">
          <SideBar></SideBar>
        </div>
      </div>

      <div className="min-h-full w-full mx-16  dark:bg-[#121212]">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/Addproject" element={<AddProject></AddProject>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
