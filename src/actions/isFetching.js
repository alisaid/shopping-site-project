const requestProducts = (filter) => ({
    type: 'REQUEST_PRODUCTS',
    filter    
})

const recieveProducts = (filter, response) => ({
    type: 'RECIEVE_PRODUCTS',
    filter,
    response
})