import React, { useState } from "react";
import { connect } from "react-redux";
import QuantityForm from "../components/QuantityForm";
import AddToCart from '../components/AddToCart'
import BuyNow from '../components/BuyNow'

const ProductDetailPage = props => {
  console.log(props.item.selectedItem)
    const [selectedImage, setSelectedImage] = useState(0);
    const setImage = (i) => {
        setSelectedImage(i)
    }
  return (
    <div className="section-item">
      <div className="container">
          <div className="image-container">
            <div className="selectedImage">
              <img
                src={props.item.selectedItem.images[selectedImage]}
                className="rounded mx-auto selectedImage"
                alt="..."
              />
            </div>
            <div className="images">
            {props.item.selectedItem.images.map((i, index) => (
                <div key={index} className="image">
                <button><img src={i} alt="my image" onClick={() => setImage(index)} /></button>                
                </div>
              ))}
            </div>
          </div>
        <div className="description-container">
                <h3>{props.item.selectedItem.name}</h3>
                <p>{props.item.selectedItem.description}</p>
        </div>
        <div className="item-sidebar">
                <div>
                <span className="price-label" >
                  <h3>Price: {props.item.selectedItem.price}</h3>
                </span>
                <QuantityForm />
                <AddToCart product={props.item.selectedItem} />
                <BuyNow />
                </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    item: state.allData
  };
};

export default connect(mapStateToProps)(ProductDetailPage);
