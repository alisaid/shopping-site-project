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
    <div className="cart-page">
      <div className="container">
      {props.data.length === 0 ? <h3>You don't have any items in your cart.</h3>: 
        <section className="section-left">
          {myOrderedArray.map(e => {
            const handleRemove = () => {
              props.dispatch(removeFromCart(e.id));
            };

            const setQuantity = quantity => {
              quantity = parseInt(quantity);
              handleRemove();

              for (let i = 1; i <= quantity; i++) {
                props.dispatch(addToCart(e));
              }
            };

            return (
              <div
                className="card mb-3"
                key={e.id}
              >
                <div className="row no-gutters">
                  <div className="card-body">
                    <div>
                      <h3 className="card-title">{e.name}</h3>
                      <div className="card-bottom">
                        <QuantityForm
                          quantity={e.quantity}
                          setQuantity={setQuantity}
                        />
                        <button className="button" onClick={handleRemove}>
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="item-price">
                      <h1>£{e.price}</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>}
        <section className="section-right">
        <div id="border"></div>
          <h3>
            Subtotal <br/>({myOrderedArray.length} Item(s) / {props.data.length}{" "}
            piece(s)):
          </h3>
          <h1>£{totalPrice.toFixed(2)}</h1>
          <BuyNow />
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCartPage);

