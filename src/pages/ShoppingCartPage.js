import React from "react";
import { connect } from "react-redux";
import QuantityForm from "../components/QuantityForm";
import { addToCart } from "../store/actions/cart";

const ShoppingCartPage = props => {
  let myOrderedArray = props.data.reduce(function(accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
      currentValue.quantity = 1;
      accumulator.push(currentValue);
    } else {
      currentValue.quantity = currentValue.quantity + 1;
    }
    return accumulator;
  }, []);

  return (
    <div className="container">
      <section className="section-left">
        {myOrderedArray.map(e => {
          const setQuantity = lastQuantity => {
            const quantity = lastQuantity - e.quantity;
            for (let i = 1; i <= quantity; i++) props.dispatch(addToCart(e));
          };
          return (
            <div
              className="card mb-3"
              style={{ maxWidth: 540 + "px", maxHeight: 300 + "px" }}
              key={e.id}
            >
              <QuantityForm quantity={e.quantity} setQuantity={setQuantity} />

              <div className="row no-gutters">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <h4>£{e.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCartPage);

// {
// <div className="col-md-4">
// <img src={e.images.slice(0, 1)} key={e.id} alt={e.name} />{" "}
// </div>}
