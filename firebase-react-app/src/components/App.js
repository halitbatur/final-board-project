import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./Home"
import InProject from "./InProject"
import NavBar from "./NavBar"
import { collection, addDoc, onSnapShot } from "firebase/firestore";
import db from "../firebase";
import "../styles/App.css";

function App(){
useEffect(()=>{
    const snapshot = onSnapShot(collection(db, "users"))
    console.log(snapshot);
})
return ( <div>
<Routes>
<Route path="/NavBar" element={<NavBar />}/>
<Route path="/home" element={<Home />}/>
<Route path="/Inproject" element={<InProject />}/>
</Routes>
</div>
)}


export default App;
