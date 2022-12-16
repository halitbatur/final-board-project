import React from "react";
import logo from './logo.png'
import image1 from './image1.jpeg'

function About() {
  return (
    <>
    <div className="logo">
      <img src={logo} alt="Logo" />
      <button className="rounded shadow-lg my-4 w-full bg-gray-900 text-white font-bold p-2 hover:bg-gray-300
          hover:cursor-pointer hover:text-white">Login</button>
          <button className="rounded shadow-lg my-4 w-full bg-lime-500 text-white font-bold p-2 hover:bg-lime-300
          hover:cursor-pointer hover:text-white" >Sign Up</button>
    </div>
    <div className="paragraph">
      <p><b>TaskGuru helps teams move work forward.</b></p>
      <span>Collaborate, manage projetcs, and reach new productivity peaks. From high rises to the home office, the way your team works in unique-accomplish it all with TaskGuru </span>
      <div>
      <input type="email" id="email" name="email"></input>
      <button className="rounded shadow-lg my-4 w-full bg-lime-500 text-white font-bold p-2 hover:bg-lime-300
          hover:cursor-pointer hover:text-white" >Sign up-it's free!</button></div>
          <img src={image1} alt="Image" />
    </div>
    <div className="footer paragrpagh">
      <p><b>It's more than work, it's a way of working together.</b></p>
      <span>Start with a TaskGuru board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit- all in one place.</span>
    </div>
    </>
  );
}

export default About;
