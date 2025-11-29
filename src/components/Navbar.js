// src/components/Navbar.js
import React from "react";
import CoolButton from "./CoolButton";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <strong>Home</strong>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <CoolButton isPrimary className="mr-2">
              Login
            </CoolButton>

            <CoolButton isSuccess>
              Signup
            </CoolButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
