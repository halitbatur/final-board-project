import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/bodyComponents/Home";
import About from "./Components/bodyComponents/About";
function App() {

  return (
    <div className="bg-gray-50 h-screen">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
