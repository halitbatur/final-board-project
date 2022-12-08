import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import home from "./Home"
import project from "./InProject"

function App(){

return ( <div>
<Routes>
<Route path="/home" element={<Home />}/>
<Route path="/project" element={<InProject />}/>
</Routes>
</div>
)}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
