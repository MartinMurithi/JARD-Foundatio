import React from "react";

function MobileNav() {
  return (
    <nav className="mobileNav">
      <ul className="mobileNavList">
        <li className="mobileNavLinkItem">
          <a href="/" className="mobileNavLink">
            Home
          </a>
        </li>

        <li className="mobileNavLinkItem">
          <a href="#about-us" className="mobileNavLink">
            About Us
          </a>
        </li>

        <li className="mobileNavLinkItem">
          <a href="#services" className="mobileNavLink">
            Our Services
          </a>
        </li>

        <li className="mobileNavLinkItem">
          <a href="#our-team" className="mobileNavLink">
            Our Team
          </a>
        </li>
        <li className="mobileNavLinkItem">
          <a href="#contacts" className="mobileNavLink">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
