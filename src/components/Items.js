import React from "react";

const Items = ({ product}) => {

  const limitProductTitle = (title, limit = 12) => {
    const newTitle = [];

    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
          if(acc + cur.length <= limit){
            newTitle.push(cur)
          }
          return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')} ...`
    }
    return title
  }

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
          <div className="name">{limitProductTitle(product.name)}</div>
          <div className="price">{product.price}</div>
        </a>
      </div>
    </div>
  );
};

export default Items;
