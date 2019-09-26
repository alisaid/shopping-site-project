import React from 'react'
import Items from './Items'

const ItemsContainer = ({ name, products }) => {
    console.log(products)
    return (
        <div>
            <Items product={products}/>            
        </div>
    )
}

export default ItemsContainer
