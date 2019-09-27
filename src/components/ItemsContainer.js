import React from 'react'
import Items from './Items'

const ItemsContainer = ({products}) => {
    console.log(products)
        const start = 0;
        const end = 4;
    
        // recipes.slice(start, end).forEach(renderRecipe);
    
    return (

        <div className="row">

            {products.slice(start,end).map(product => (
                
                <div className="col-md-3">
                    
                    <Items product={product} />            
                </div>            
            ))}
        </div>

        )    
}

export default ItemsContainer
