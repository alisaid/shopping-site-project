import React, { useState, useEffect } from 'react'
import Category from './Category'



const CategoryContainer = () => {
    const [names, setNames] = useState( ['Jewelry', 'Keyholders', 'Laser Cut Products'] )
    const [cards, setCards] = useState ([ 
        [{
            name: "product-1",
            id: 1,
            category: "Jewelry",
            image: "../images/jewelry/jewelry-1.jpg",
            rating: 4,
            price: "$10"
          },
          {
            name: "product-2",
            id: 2,
            category: "Jewelry",
            image: "../images/jewelry/jewelry-2.jpg",
            rating: 4.5,
            price: "$12"
          },
          {
            name: "product-3",
            id: 3,
            category: "Jewelry",
            image: "../images/jewelry/jewelry-3.jpg",
            rating: 5,
            price: "$15"
          },
          {
            name: "product-4",
            id: 4,
            category: "Jewelry",
            image: "../images/jewelry/jewelry-4.jpg",
            rating: 5,
            price: "$10"
          }],
          [{
            name: "product-1",
            id: 1,
            category: "Keyholder",
            image: "../images/keyholders/keyholder-1.jpg",
            rating: 4,
            price: "$10"
          },
          {
            name: "product-2",
            id: 2,
            category: "Keyholders",
            image: "../images/keyholders/keyholder-2.jpg",
            rating: 4.5,
            price: "$12"
          },
          {
            name: "product-3",
            id: 3,
            category: "Keyholders",
            image: "../images/keyholders/keyholder-3.jpg",
            rating: 5,
            price: "$15"
          },
          {
            name: "product-4",
            id: 4,
            category: "Keyholders",
            image: "../images/keyholders/keyholder-4.jpg",
            rating: 5,
            price: "$10"
          }],
          [{
            name: "product-1",
            id: 1,
            category: "Lasercut",
            image: "../images/lasercut/lasercut-1.jpg",
            rating: 4,
            price: "$10"
          },
          {
            name: "product-2",
            id: 2,
            category: "Lasercut",
            image: "../images/lasercut/lasercut-2.jpg",
            rating: 4.5,
            price: "$12"
          },
          {
            name: "product-3",
            id: 3,
            category: "Lasercut",
            image: "../images/lasercut/lasercut-3.jpg",
            rating: 5,
            price: "$15"
          },
          {
            name: "product-4",
            id: 4,
            category: "Lasercut",
            image: "../images/lasercut/lasercut-4.jpg",
            rating: 5,
            price: "$10"
          }]]
    )
          console.log(cards)
    return (
        <div>
            <Category names={names} cards={cards} />
        </div>
    )
}

export default CategoryContainer
