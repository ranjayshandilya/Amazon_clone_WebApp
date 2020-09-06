import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav classname="header">
            {/*logo on the left*/}
            <Link to="/login">
            <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
            />
            </Link>
            
            {/*Search box*/}
            <input type="text" classname="haeder_searchInput" />

            {/*3 Links*/}
            {/*Basket icon with numbers*/}
        </nav>
    )
}

export default Header
