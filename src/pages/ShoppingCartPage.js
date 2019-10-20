import React from "react";
import { connect } from "react-redux";
import QuantityForm from "../components/QuantityForm";
import { addToCart, removeFromCart } from "../store/actions/cart";
import BuyNow from "../components/BuyNow";

const ShoppingCartPage = props => {
  const myOrderedArray = props.data.reduce(function(accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  const totalPrice = myOrderedArray.reduce((acc, curVal) => {
    const price = Number(curVal.price);
    const itemTotalPrice = price * curVal.quantity;
    return acc + itemTotalPrice;
  }, 0);

  
  return (
    <div className="container">
      <section className="section-left">
        {myOrderedArray.map(e => {
          const handleRemove = () => {
            props.dispatch(removeFromCart(e.id));
          }

          const setQuantity = quantity => {
            quantity = parseInt(quantity);
            handleRemove()

            for (let i = 1; i <= quantity; i++) {
              props.dispatch(addToCart(e));
            }
          };          

          return (
            <div
              className="card mb-3"
              style={{ maxWidth: 540 + "px", maxHeight: 300 + "px" }}
              key={e.id}
            >
              <div className="row no-gutters">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <div className="bottom">
                      <QuantityForm
                        quantity={e.quantity}
                        setQuantity={setQuantity}
                      />
                      <button className="btn-delete" onClick={handleRemove}>Delete</button>
                      </div>
                      <h4>£{e.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="section-right">
        <h2>
          Subtotal ({myOrderedArray.length} Item(s) / {props.data.length}{" "}
          piece(s)):
        </h2>
        <p>£{totalPrice}</p>
        <BuyNow />
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
