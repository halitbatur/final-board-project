import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import FinishedTasks from "./Components/FinishedTasks";
function App() {
  return (
    <div className="App">
      <header
        className="flex justify-center items-center text-lg md:text-2xl
      space-x-10 md:space-x-20 bg-black text-white h-16"
      >
        <Link className="hover:text-red-800" to="/">
          Home
        </Link>
        <Link className="hover:text-red-800" to="/about">
          About
        </Link>
        <Link className="hover:text-red-800" to="/finished">
          Finished Tasks
        </Link>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/finished" element={<FinishedTasks />} />
      </Routes>
    </div>
  );
}

export default App;
