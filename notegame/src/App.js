
import React from 'react'
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import TeamMembers from './Components/TeamMembers';
import NavBar from './Components/NavBar.js';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div >
    <NavBar />
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/about" element ={<About/>}/>
      <Route path ="/teammembers" element ={<TeamMembers/>}/>
    </Routes>

    </div>
  );
}

export default App;
