import React from "react";


const QuantityForm = (props) => {  

  const options = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="quantity-form">
      <select onChange={e => props.setQuantity(e.target.value)} value={props.quantity}>
      {options.map(o =><option key={o}>{o}</option> )}
      </select>
      <p>Qty</p>
    </div>
  );
};

export default QuantityForm;
