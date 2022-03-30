import React from "react";
import './App.css';
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <h3>SS</h3>
            <ul className="nav-links">
            <Link to="/ski">
            <li>Ski</li>
            </Link>
            <Link to="/snowboard">
            <li>Snowboard</li>
            </Link>
            </ul>
        </nav>
    )
}


export default Nav