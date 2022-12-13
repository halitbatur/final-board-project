import React, { useState } from "react";

// import Card from "../Card/Card";
// import Dropdown from "../Dropdown/Dropdown";
// import Editable from "../Editabled/Editable";
// import { MoreHorizontal } from "react-feather";
import "./About.css";

function About() {
  return (
    <div className="about_container">
      <div className="about">
        <p>Kanban Board is a tool for workflow visualization, designed to help you bring clarity to your work process and enhance efficiency by limiting work in progress. </p>
        <div className=" about_team">
          <h2 className=" TeamTitle">Team</h2>
          <ul className=" teamMember">
            <li className="team">mhamad marshall</li>
            <li className="team">Nisreen Hamzah</li>
            <li className="team">Ali Jasim</li>
            <li className="team">Amal Salah</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default About;
