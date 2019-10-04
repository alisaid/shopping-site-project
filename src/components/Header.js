import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container">
          <HeaderLogo />
          <HeaderSearch />

          <div className="nav">
            <a href="#">
              <i className="fas fa-sign-in-alt fa-2x"></i>
            </a>
            <a href="#">
              <i className="fas fa-cart-arrow-down fa-2x"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
