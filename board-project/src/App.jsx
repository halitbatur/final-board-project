import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Kanban from "./pages/kanban/Kanban";
import MainTable from "./pages/mainTable/MainTable";
import BoardCard from './components/BoardCard';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar />
      <Routes>
        <Route path="/" element={ <MainTable/> } />
        <Route path="/kanban" element={ <Kanban/> } />

         <Route path="/" element={<div>home</div>} />
        <Route path="/add" element={<div>add</div>} />
        <Route path="/overview" element={<div>Overview</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      <BoardCard/>
    </div>
  );
}


export default App;
