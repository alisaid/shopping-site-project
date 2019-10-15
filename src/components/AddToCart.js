import React from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../store/actions/cart'


const AddToCart = (props) => {

    const handleAddCart = () => {
        console.log(props)
        if(props.data.findIndex(i => i.id === props.product.id) > -1) {
          props.dispatch(removeFromCart(props.product.id))
        }else{
          props.dispatch(addToCart(props.product))
          console.log(props.data)
        }    
      }
    return (
        <div className="addCart-form">
            <a href="#" className="btn-addCart" onClick={handleAddCart}>
                <i className="fas fa-cart-arrow-down fa-2x"></i>
                <p>Add To Cart</p>
            </a>          
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.cart
    }
}

export default connect(mapStateToProps)(AddToCart)
