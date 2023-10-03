import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <section className="navbar">
        <div className="wrapper">

        <div className="logo">
            <h1>herolo weather app</h1>
        </div>
        <div className="links-container">
        <NavLink exact className="Nav_link" to="/">
         Home
        </NavLink>|
        <NavLink exact className="Nav_link" to="/favorite">
          Favorite
        </NavLink>

        </div>
     
        </div>
    </section>
  );
};
export default Navbar;