//import React from "react";
import logo from './logo.png'
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__container">
          <img
            src={logo} alt="mi-logo"
            className="header__left__container__logo"
          />
        </div>
        <h1 className="header__left__title">Product List</h1>
      </div>
      <div className="header__right">
        <h3>About Us</h3>
      </div>
    </div>
  );
}

export default Header;
