import React from "react";
import "./NavBar.css";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="logo-img-parent">
        <a href="/">
          <img
            src="/assets/jard-logo-1.png"
            alt="JARD Logo"
            className="img-logo"
          />
        </a>
      </div>

      <menu>
        <li className="menu-item">
          <a href="#hero" className={"link-item"}>
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="/#about-us" className={"link-item"}>
            About Us
          </a>
        </li>
        <li className="menu-item">
          <a href="/#services" className={"link-item"}>
            Our Services
          </a>
        </li>
        <li className="menu-item">
          <a href="#our-team" className={"link-item"}>
            Our Team
          </a>
        </li>

        <li className="menu-item">
          <a href="#contact-us" className={"link-item"}>
            Contact Us
          </a>
        </li>
      </menu>
    </nav>
  );
}

export default NavBar;
