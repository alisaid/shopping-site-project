import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../store/actions/cart'
import { openItem } from '../store/actions/allData'


const Items = (props) => {
  const limitProductTitle = (title, limit = 12) => {
    const newTitle = [];

    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);

      return `${newTitle.join(" ")} ...`;
    }
    return title;
  };

  const handleAddCart = () => {    
      props.dispatch(addToCart(props.product))  
  }

  const handleOpenItem = () =>{
    props.dispatch(openItem(props))
  }

  return (
    <div className="card">
    <Link to={`/item/${props.product.id}`} onClick={handleOpenItem}>
      <div className="face face1">
        <img
          src={props.product.images[0]}
          alt={`jewelry-1`}
          className="card-img-top"
        />
      </div>
    </Link>
      <div className="card-body face face2">
        <Link to={`/item/${props.product.id}`} className="btn btn-primary name_label" onClick={handleOpenItem}>
          <div className="name">{limitProductTitle(props.product.name)}</div>
        </Link>
        <div className="price_label">
          <div className="price">£{props.product.price}</div>
          <button className="btn btn-primary " onClick={handleAddCart}>
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      data: state.cart
  }
}

export default connect(mapStateToProps)(Items);
