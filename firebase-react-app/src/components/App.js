import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./Home"
import List from "./List"
import NavBar from "./NavBar"
import { collection, addDoc, onSnapShot } from "firebase/firestore";
import db from "../firebase";
import "../styles/App.css";
import Card from "./Card";
import { connect } from "react-redux"

function App(props){


const { lists } = props
const listsArray = lists.map((list) => {
  return  <List key={list.id} title={list.title}  cards={list.cards} />
})
console.log(lists)
return ( <div>
    <div  className="w-72 m-5 p-2 rounded bg-slate-100">
    {/* <List title={lists.title} />
    <Card task={lists.cards}/> */}
    {lists && listsArray}
    </div>
</div>
   );

}

const mapStateToProps = state => ({
    lists: state.lists })


export default connect(mapStateToProps)(App);
