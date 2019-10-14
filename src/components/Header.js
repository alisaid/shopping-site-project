import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container">
          <HeaderLogo />
          <HeaderSearch history={props.history} />
          <Link to="/shoppingCart">
            <div className="nav">
              <a href="#">
                <i className="fas fa-cart-arrow-down fa-2x"></i>
              </a>
              <div className="cart_count">
                <p>{props.data.length}</p>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return { data: state.cart };
};

export default connect(mapStateToProps)(Header);
