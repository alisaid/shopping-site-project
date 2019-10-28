export const addToCart = (item = {}, quantity) => 
({
    type: 'ADD_TO_CART',
    item,
    quantity
})
export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    id: item.id,
    item
})

export const deleteAll = (id) => ({
    type: 'DELETE_ALL',
    id
})