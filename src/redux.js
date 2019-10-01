import { createStore } from 'redux';

const requestProducts = () => ({
    type: 'REQUEST_PRODUCTS',
})

const recieveProducts = () => ({
    type: 'RECIEVE_PRODUCTS',
})


const isFetchingReducer = (state = false, action) => {
    switch (action.type) {
        case 'REQUEST_PRODUCTS': 
            return true;
        case 'RECIEVE_PRODUCTS':
            return false;
        default:
            return state;
    }
}

export default () => {
    const store = createStore(isFetchingReducer);
    
    return store
}

