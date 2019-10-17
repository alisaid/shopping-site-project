import React, { useState } from "react";

const QuantityForm = () => {  

  const [quantity, setQuantity] = useState(1)
  return (
    <div className="quantity-form">
      <button className="btn btn-decrease" title="decrease" onClick={() => setQuantity(quantity - 1)}>
        <i className="fas fa-minus"></i>
      </button>
      <span className="form-control-wrap">
        <input id="quantity" name="quantity" type="number" value={quantity} min={1} className="form-control"/>
      </span>
      <button className="btn btn-increase" title="increase" onClick={() => setQuantity(quantity + 1)}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default QuantityForm;
