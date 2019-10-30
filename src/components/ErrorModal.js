import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ErrorModal = ({ data }) => {
  return (
    <Modal
      isOpen={
        data.length > 0 && data.filter(e => e.isGreaterThanTen === true).length
          ? true
          : false
      }
      contentLabel="Error message"
    >
      <div>
        <h3>You can not add the same item more than 10 times </h3>
        <button>Okay</button>
        <button>
          <Link to="/shoppingCart">
            <div>Go to shopping cart</div>
          </Link>
        </button>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    data: state.cart
  };
};

export default connect(mapStateToProps)(ErrorModal);
