import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { collection, addDoc } from "firebase/firestore"; 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
