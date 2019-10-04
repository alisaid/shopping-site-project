import React from "react";
import ItemsContainer from './ItemsContainer'

const Category = props => {
  return (
    <div className="container">
      {props.cards.map(e => (
       <div className="category-wrapper" key={e.id}>
        <a href="/" className="btn"><h3>{e.name}</h3></a>  
        <ItemsContainer name={e.name} products={e.items}/>    
      </div>
      ))}
    </div>
  );
};

export default Category;
