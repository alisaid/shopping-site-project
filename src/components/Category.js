import React from "react";
import ItemsContainer from './ItemsContainer'

const Category = props => {
  return (
    <div className="container">
      {props.cards.map(e => (
        <div  key={e.id} className="row">
        <a href="#" className="btn"><h3>{e.name}</h3></a>  
        <ItemsContainer products={e.items}/>    
        </div>
      ))}
    </div>
  );
};

export default Category;
