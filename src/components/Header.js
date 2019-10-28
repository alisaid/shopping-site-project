import React from "react";
import HeaderLogo from "./HeaderLogo";
import Search from "./Search";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = props => {
  let totalQuantity = 0
  props.data.map(i => {
    totalQuantity = totalQuantity + i.quantity
  })
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container">
          <HeaderLogo />
          <Search history={props.history} />
          <div className="nav">
          <Link to="/shoppingCart">
                <i className="fas fa-cart-arrow-down fa-2x"></i>
              <div className="cart_count">
                <p>{totalQuantity}</p>
              </div>
              </Link>
            </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return { data: state.cart };
};

export default connect(mapStateToProps)(Header);
