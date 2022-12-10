import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Kanban from "./pages/kanban/Kanban";
import MainTable from "./pages/mainTable/MainTable";
import BoardCard from './components/BoardCard';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <MainTable/> } />
        <Route path="/kanban" element={ <Kanban/> } />
      </Routes>
      <BoardCard/>
    </div>
  );
}


export default App;
