import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FinishedTasks from "./Components/FinishedTasks";

function App() {
  return (
    <div className="App font-poppins background flex flex-col justify-evenly ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/finished" element={<FinishedTasks />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
