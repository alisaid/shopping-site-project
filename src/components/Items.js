import React from "react";

const Items = ({ img, name, price }) => {
  return (
    <div className="card">
      <div className="face face1">
        <img
          src={img}
          alt={`jewelry-1`}
          className="card-img-top"
        />
      </div>
      <div className="card-body face face2">
        <a href="#" className="btn btn-primary">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
        </a>
      </div>
    </div>
  );
};

export default Items;
