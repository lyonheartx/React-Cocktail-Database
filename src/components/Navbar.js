import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <a href="https://www.zilartdesign.com">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </a>

        <ul className="nav-links">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
