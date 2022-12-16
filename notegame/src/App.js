import React from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import TeamMembers from "./Components/TeamMembers";
import NavBar from "./Components/NavBar.js";
import Update from "./Components/Update.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teammembers" element={<TeamMembers />} />
        <Route path="/todos/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
