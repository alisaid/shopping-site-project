import React from 'react'
import Items from './Items'

const ItemsContainer = ({products}) => {
    console.log(products)
    return (
        <div>
            {products.map(product => (
                <div className="col-md-3">
                    <Items product={product} />            
                </div>            
            ))}
        </div>
        )    
}

export default ItemsContainer
