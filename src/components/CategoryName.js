import React from 'react'
import ItemsContainer from './ItemsContainer'

const CategoryName = ({ name, cards }) => {
    return (
        name.map(e => (
            <div>
                <a href="#" class="btn"><h3>{e}</h3></a>  
                <ItemsContainer products={cards} name={e}/>        
            </div>  
        ))
        
    )
}

export default CategoryName
