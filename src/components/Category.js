import React from 'react'
import CategoryName from './CategoryName'

const Category = (props) => {
    console.log(props.cards)
        props.cards.map(e => console.log(e))
    return (
        <div>
            <CategoryName name={props.names} cards={props.cards} />
        </div>
    )
}

export default Category
