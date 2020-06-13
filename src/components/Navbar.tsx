import React from 'react';
import "../styles/Navbar.scss"

function Navbar() {
    return (
        <nav className="navBar">
            <ul>
                <li className="navButton">
                    <a className="link" href="#Home">Home</a>
                </li>
                <li className="navButton">
                    <a className="link" href="#About">About</a>
                </li>
                <li className="navButton">
                    <a className="link" href="#Projects">Projects</a>
                </li>
                <li className="navButton">
                    <a className="link" href="#Contact">Contact</a>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar;

