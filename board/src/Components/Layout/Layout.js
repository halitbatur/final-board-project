import React, { useState } from "react";

// import Card from "../Card/Card";
// import Dropdown from "../Dropdown/Dropdown";
// import Editable from "../Editabled/Editable";
// import { MoreHorizontal } from "react-feather";
import { NavLink } from 'react-router-dom';

import "./Layout.css";

function Layout(props) {
  // const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="layoutNavbar icon_app">
      <NavLink className="navbar_element" to="/">
        <h1 className="icon_size">Kanban Board</h1>
      </NavLink>
      <NavLink className="navbar_element" to="/home">Create Boards</NavLink>
      <NavLink className="navbar_element" to="/about">About</NavLink>
      <NavLink className="navbar_element" to="/contact">Contact</NavLink>
    </div>)
};


export default Layout;
