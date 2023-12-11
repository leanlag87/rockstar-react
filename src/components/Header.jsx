import React from "react";
import LOGO from "../img/favicon-32x32.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav-menu">
          <i className="bi bi-list"></i>
        </div>
        <div className="header__nav-logo">
          <img className="header__logo" src={LOGO} alt="img-logo" />
        </div>
        <div className="header__nav-login">
          <i className="bi bi-person-circle"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
