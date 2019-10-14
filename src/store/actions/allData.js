import axios from 'axios'

export const requestAllData = (dispatch) => {
    dispatch({ type: 'LOADING' });
    axios.get("https://products-data.herokuapp.com/api/allProducts")    
            .then(data =>{
                axios.get("https://products-data.herokuapp.com/api/getCategoryList")
                .then(result => {
                    dispatch({ type: 'LOADED',payload:data.data, carouselData: result.data})
                })
            })
            .catch(err => {
                dispatch({ type: 'ERROR', payload: err})
            })
    
}

export const recieveProducts = () => ({
    type: 'RECIEVE_PRODUCTS',
})

export const openItem = (item) => ({
    type: 'OPEN_ITEM',
    item
})