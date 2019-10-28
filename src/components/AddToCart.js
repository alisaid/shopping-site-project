import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/cart'
import QuantityForm from "../components/QuantityForm";



const AddToCart = (props) => {
    const [quantity, setQuantity] = useState(props.product.quantity)
    
    const handleAddCart = (product, quantity = 1) => {
        const qnty = Number(quantity) 
        props.dispatch(addToCart(product, qnty))
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
