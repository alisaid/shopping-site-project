export default (state = false, action) => {
    switch (action.type) {
        case 'REQUEST_PRODUCTS': 
            return true;
        case 'RECIEVE_PRODUCTS':
            return false;
        default:
            return state;
    }
}