import React from "react";

const QuantityForm = () => {
  return (
    <div className="quantity-form">
      <button className="btn btn-decrease" title="decrease">
        <i className="fas fa-minus"></i>
      </button>
      <span className="form-control-wrap">
        <input id="quantity" name="quantity" type="text" value="1" className="form-control"/>
      </span>
      <button className="btn btn-increase" title="increase">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantityForm;
