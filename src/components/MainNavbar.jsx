import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaIndustry,
  FaConciergeBell,
  FaBriefcase,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Tocontractbar/ContractBar.css";
import Logo from "../../src/assets/images/logo_03.png";

const MainNavbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="top-contact-bar">
        <div className="icon-group">
          <FaEnvelope />
          <span>info@everestglobalsolutionsinc.com</span>
        </div>
        <div className="icon-group">
          <FaPhoneAlt />
          <span>+ (305)563-3277</span>
        {/* </div> */}
        {/* <div className="icon-group"> */}
        {/*   <a href="https://www.instagram.com/everestsolutions/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a> */}
      {/*   </div> */}
        {/* <div className="icon-group"> */}
         {/*  <a
            href="https://www.linkedin.com/company/everest-global-solutions/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a> */}
        </div>
      </div>

      <header className="header">
        <div className="main-navbar">
          <div className="nav-logo">
            <img src={Logo} alt="EverestGlobal" />
          </div>

          <div className="menu-and-links">

          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaHome /> HOME
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaInfoCircle /> ABOUT US
            </NavLink>
            <NavLink to="/industries" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaIndustry /> INDUSTRIES
            </NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaConciergeBell /> SERVICES
            </NavLink>
            <NavLink to="/careers" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaBriefcase /> CAREERS
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active-link" : "")}>
              <FaEnvelope /> CONTACT US
            </NavLink>

            <span className="search-icon" onClick={toggleSearch}>
              <FaSearch />
            </span>
          </nav>
        </div>
      </div>

        {showSearch && (
          <div className="search-container">
            <input type="text" placeholder="Search Site..." />
            <button>
              <FaSearch />
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default MainNavbar;
