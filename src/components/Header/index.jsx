import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../styles/Header.css";
import BtnCall from "../BtnCall";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`${showLinks ? "show-responsive-nav" : "hide-nav"} `}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={require("../../assets/logo/logo.jpg")} alt="logo" />
        </div>

        <div className="nav-links">
          <NavLink
            exact
            to="/"
            activeClassName="style-nav-active"
            onClick={handleShowLinks}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/About"
            activeClassName="style-nav-active"
            onClick={handleShowLinks}
          >
            Assainissement
          </NavLink>
          <NavLink
            to="/Contact"
            activeClassName="style-nav-active"
            onClick={handleShowLinks}
          >
            Contact
          </NavLink>
          <NavLink
            to="/Camera"
            activeClassName="style-nav-active"
            onClick={handleShowLinks}
          >
            Passage caméra
          </NavLink>
        </div>

        <div className="responsive-btn">
          <BtnCall />
        </div>

        <button className="nav-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
