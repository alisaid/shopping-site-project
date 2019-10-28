import React from "react";
import { connect } from "react-redux";
import QuantityForm from "../components/QuantityForm";
import { addToCart, deleteAll } from "../store/actions/cart";
import BuyNow from "../components/BuyNow";

const ShoppingCartPage = props => {  

  const totalPrice = props.data.reduce((acc, curVal) => {
    const price = Number(curVal.price);
    const itemTotalPrice = price * curVal.quantity;
    return acc + itemTotalPrice;
  }, 0);

  return (
    <div className="cart-page">
      <div className="container">
      {props.data.length === 0 ? <h3>You don't have any items in your cart.</h3>: 
        <section className="section-left">
          {props.data.map(e => {
            const handleRemove = () => {
              props.dispatch(deleteAll(e.id));
            };

            const setQuantity =  (quantity = 1) => { 
                const qnty = Number(quantity) 
                props.dispatch(addToCart(e, qnty))
            }
            
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
            Subtotal <br/>({props.data.length} Item(s):
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

