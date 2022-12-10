import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./Home"
import List from "./List"
import NavBar from "./NavBar"
import { collection, addDoc, onSnapShot } from "firebase/firestore";
import db from "../firebase";
import "../styles/App.css";

function App(){
return ( <div>
    <h1>hi</h1>
    <List />
</div>
)}


export default App;
