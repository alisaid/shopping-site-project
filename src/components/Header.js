import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container">
          <HeaderLogo />
          <HeaderSearch history={props.history}/>

          <div className="nav">
            <a href="#">
              <i className="fas fa-sign-in-alt fa-2x"></i>
            </a>
            <a href="#">
              <i className="fas fa-cart-arrow-down fa-2x"></i>
            </a>
           <p> {props.data.length}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{data: state.cart}
}

export default connect(mapStateToProps)(Header);
