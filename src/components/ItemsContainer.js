import React from "react";
import Items from "./Items";

const ItemsContainer = ({ products }) => {
  const start = 0;
  const end = 4;
  
  return (
    <div className="row">
      {products.slice(start, end).map(product => (
        <div className="col-md-3" key={product.id}>
          <Items product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
