const initialState = {
    loading: false,
    products: [],
    carouselData:[],
    selectedItem:[],
    error: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING': {
            return state = {...state, loading: true}
        }
        case 'LOADED': {
            return state = {...state, loading: false, products: action.payload, carouselData:action.carouselData}
        }
        case 'OPEN_ITEM': {
            return state = {...state, selectedItem:action.item}
        }
        case 'ERROR': {
            return state = {...state, loading:false, error: action.payload}
        }
        default:
            return state;
    }
}