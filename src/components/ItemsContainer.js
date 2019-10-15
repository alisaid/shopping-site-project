import React from "react";
import Items from "./Items";

const ItemsContainer = ({ products, id }) => {
  return   (
    <div className="row">
      {products.map(product => (
        <div className="col-md-3" key={product.id}>
          <Items product={product} categoryId={id}/>
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
