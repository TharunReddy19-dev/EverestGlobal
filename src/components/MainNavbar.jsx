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
  FaFacebookF,
  FaTimes,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import "./Tocontractbar/ContractBar.css";
import Logo from "../../src/assets/images/logo_03.png";

const MainNavbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      <div className="top-contact-bar">
        <div className="icon-group">
          <FaEnvelope />
          <span>info@everestglobalsolutions.com</span>
        </div>
        <div className="icon-group">
          <FaPhoneAlt />
          <span>+ (305) 563 - 3277</span>
        </div>
        {/* <div className="icon-group"> */}



        {/*   </div> */}

          <div className="icon-group">
          <a href="https://www.instagram.com/everestsolutions/">
          <FaInstagram />
          </a>
          </div>
          

          <div className="icon-group"><a
        href="https://www.linkedin.com/company/everest-global-solutions/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a></div>
          
       
       
      </div>

      <header className="header">
        <div className="main-navbar">
          <div className="nav-links">
            <img src={Logo} alt="EverestGlobal" />
          </div>

          <nav className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaHome /> HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaInfoCircle /> ABOUT US
            </NavLink>
            <NavLink
              to="/industries"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaIndustry /> INDUSTRIES
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaConciergeBell /> SERVICES
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaBriefcase /> CAREERS
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FaEnvelope /> CONTACT US
            </NavLink>

            <span className="search-icon" onClick={toggleSearch}>
              <FaSearch />
            </span>
          </nav>
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
