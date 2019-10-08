import React from "react";
import Items from "./Items";

const ItemsContainer = ({ products }) => {
  return   (
    <div className="row">
      {products.map(product => (
        <div className="col-md-3" key={product.id}>
          <Items product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
