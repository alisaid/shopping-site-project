import React from "react";
import ItemsContainer from "./ItemsContainer";
import { Link } from 'react-router-dom'

const Category = props => {
  return (
    <div className="container">
      {props.cards.map(e => {
        const start = 0;
        const end = 4;
        const products = e.items.slice(start, end);
        return (
          <div className="category-wrapper" key={e.id}>
            <Link to={`/category/${e.id}`} className="btn">
              <h3>{e.name}</h3>
            </Link>
            <ItemsContainer id={e.id} products={products} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
