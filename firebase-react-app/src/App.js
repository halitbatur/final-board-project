import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import List from "./Components/List"
import "./styles/App.css";
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
