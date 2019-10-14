import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Quantity";

const ShoppingCartPage = props => {
  return props.data.map(e => (
    <div
      className="card mb-3"
      style={{ maxWidth: 540 + "px", maxHeight: 300 + "px" }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={e.images.slice(0, 1)} key={e.id} alt={e.name} />{" "}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{e.name}</h5>

            <h4>£{e.price}</h4>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  ));
};

const mapStateToProps = state => {
  return {
    data: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCartPage);
