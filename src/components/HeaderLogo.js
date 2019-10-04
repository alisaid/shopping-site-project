import React from "react";

const HeaderLogo = () => {
  return (
    <div className="logo-container">
      <img
        className="logo-img"
        src="./images/logo.png"
        alt="logo"
        id="header-img"
      />
      <h1 className="logo">Gift House</h1>
    </div>
  );
};

export default HeaderLogo;
