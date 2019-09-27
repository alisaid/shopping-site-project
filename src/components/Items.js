import React from "react";

const Items = ({ product}) => {
  return (
    <div className="card">
      <div className="face face1">
        <img
          src={product.images[0]}
          alt={`jewelry-1`}
          className="card-img-top"
        />
      </div>
      
      <div className="card-body face face2">
        <a href="#" className="btn btn-primary">
          <div className="name">{product.name}</div>
          <div className="price">{product.price}</div>
        </a>
      </div>
    </div>
  );
};

export default Items;
