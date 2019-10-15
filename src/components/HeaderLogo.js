import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="logo-container">
      <img
        className="logo-img"
        src={require("../images/logo.png")}
        alt="logo"
        id="header-img"
      />
      <Link to="/">
        {" "}
        <h1 className="logo">Gift House</h1>
      </Link>
    </div>
  );
};

export default HeaderLogo;
