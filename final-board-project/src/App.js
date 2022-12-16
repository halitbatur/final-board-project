import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/bodyComponents/Home";
import { BrowserRouter as Router} from "react-router-dom";
import Login from "./Components/bodyComponents/Login.js";
import SignUp from "./Components/bodyComponents/SignUp.js";
import AuthProvider from "./Components/bodyComponents/Auth.js";
import { AuthContext } from "./Components/bodyComponents/Auth.js";
// import PrivateRoute from "./Components/bodyComponents/PrivateRoute.js";
import About from "./Components/bodyComponents/About";
import TaskComponent from "./Components/bodyComponents/tasksPageComponents/TaskComponent";
import Toggle from "./Components/bodyComponents/tasksPageComponents/Toggle"; 


function App() {

  const user = useContext(AuthContext);
  console.log(user);
  
  if(user) {
    return (
      <div className="h-screen bg-gray-50">
      <Navbar loggedIn = {true} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/tasks/:id" element={<TaskComponent />} />
      </Routes>
      <div>
      </div>
    </div>
    )
  } else {
    return (
      <div>
        <Navbar loggedIn = {false}/>
        <Routes>
         <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    );
  }

  // return (
  //   <div className="h-screen bg-gray-50">
  //     <Navbar />
  //     <Routes>
  //      <Route exact path="/login" element={<Login />} />
  //       <Route exact path="/signup" element={<SignUp />} />
  //       <Route exact path="/home" element={<Home />} />
  //       <Route exact path="/about" element={<About />} />
  //       <Route exact path="/tasks/:id" element={<TaskComponent />} />
  //     </Routes>
  //     <div>
  //     </div>
  //   </div>
  // );
}

export default App;
