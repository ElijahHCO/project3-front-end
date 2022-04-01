import React from "react";
import './App.css';
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <Link to="/">
            <h3 className="logo">SS</h3>
            </Link>
            <ul className="nav-links">
            <Link to="/ski">
            <li>Skis</li>
            </Link>
            <Link to="/snowboard">
            <li>Snowboards</li>
            </Link>
            </ul>
        </nav>
    )
}


export default Nav