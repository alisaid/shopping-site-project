import React from "react";
import { Link } from "react-router-dom";

const BuyNow = () => {
  return (
    <div>
      <Link to="/order">
        <div className="buyNow-form">
          <div className="btn-buyNow">
            <i className="fas fa-arrow-circle-right fa-2x"></i>
            <p>Buy Now</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BuyNow;
