import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/bodyComponents/Home";
import About from "./Components/bodyComponents/About";
import TaskComponent from "./Components/bodyComponents/tasksPageComponents/TaskComponent";
function App() {
  return (
    <div className="bg-gray-50 h-screen">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/tasks/:id" element={<TaskComponent />} />
      </Routes>
    </div>
  );
}

export default App;
