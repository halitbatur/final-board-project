import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./page/Home";
import AddProject from "./page/AddProject";
import Projects from "./page/Projects";
import SideBar from "./components/Navigation/SideBar";
import Login from "./page/Login";
import Profile from "./page/Profile";
function App() {
  return (
    <div className="App relative h-full w-full ">
      <h1 className="text-3xl font-bold underline text-red-500">
        Tailwind is work
      </h1>
      <div className=" h-screen  bg-[#0037b3] left-0 top-0  fixed w-64">
        <SideBar></SideBar>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/Addproject" element={<AddProject></AddProject>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
