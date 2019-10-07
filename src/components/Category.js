import React from "react";
import ItemsContainer from "./ItemsContainer";

const Category = props => {
  return (
    <div className="container">
      {props.cards.map(e => {
        const start = 0;
        const end = 4;
        const products = e.items.slice(start, end);
        return (
          <div className="category-wrapper" key={e.id}>
            <a href="/" className="btn">
              <h3>{e.name}</h3>
            </a>
            <ItemsContainer name={e.name} products={products} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
