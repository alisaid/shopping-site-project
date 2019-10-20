import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../store/actions/cart'
import QuantityForm from "../components/QuantityForm";



const AddToCart = (props) => {
    const [quantity, setQuantity] = useState(props.product.quantity)
    
    const handleAddCart = (product, quantity = 1) => {
        quantity = parseInt(quantity)
        props.dispatch(removeFromCart(product.id))

        for(let i = 1; i <= quantity; i++)
          props.dispatch(addToCart(product)) 
      }
    return (
        <div className="input-group">          
            <QuantityForm quantity={quantity} setQuantity={setQuantity}/>
            <div className="addCart-form">
                <a className="btn-addCart" onClick={() => handleAddCart(props.product, quantity)}>
                    <i className="fas fa-cart-arrow-down fa-2x"></i>
                    <p>Add To Cart</p>
                </a>          
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.cart
    }
}

export default connect(mapStateToProps)(AddToCart)
