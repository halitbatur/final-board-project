import React from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom'


export default  function NavBar() {
    return (
       <>
       <nav className="navBarContainer">
        <h1>Recipes</h1>
            <ul>
                 <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/teammembers">Team members</Link>
                </li>
              
            </ul>
       </nav>
       </>
    )
}

