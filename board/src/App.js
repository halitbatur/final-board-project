import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import LoginLogOut from "./Components/LoginSignin/LoginSignin"
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LogIn } from "react-feather";


function App() {
  return (
    <div className="app">
      <div className="app_nav">
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<LoginLogOut />} exact />
            <Route path="/home" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
