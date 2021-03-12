import React from 'react'
import "./CSS/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";

export default function Navbar() {
    return (
        <React.Fragment>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fa fa-align-justify"></i>
                </label>
                <label className="logo">Coders Lab</label>
                <ul>
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About US</a></li>
                    <li><a href="#">Our Happy Clients</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
            </nav>
        </React.Fragment>
    )
}
