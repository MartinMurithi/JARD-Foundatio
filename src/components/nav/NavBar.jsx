import React, { useState } from "react";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./NavBar.css";
import MobileNav from "./MobileNav";

function NavBar() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
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
          <a href="/" className={"link-item"}>
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="/about-us" className={"link-item"}>
            About Us
          </a>
        </li>
        <li className="menu-item">
          <a href="/services" className={"link-item"}>
            Our Services
          </a>
        </li>
        <li className="menu-item">
          <a href="/our-team" className={"link-item"}>
            Our Team
          </a>
        </li>

        <li className="menu-item">
          <a href="#contacts" className={"link-item"}>
            Contact Us
          </a>
        </li>
      </menu>

      {isMobileMenuVisible ? (
        <div className="xIcon" onClick={() => setIsMobileMenuVisible(false)}>
          <MdOutlineClose />
        </div>
      ) : (
        <FaBars
          className="barsIcon"
          onClick={() => setIsMobileMenuVisible(true)}
        />
      )}
      {isMobileMenuVisible && <MobileNav />}
    </nav>
  );
}

export default NavBar;
