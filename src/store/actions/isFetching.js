import axios from 'axios'

export const requestAllData = (dispatch) => {
    dispatch({ type: 'LOADING' });
    axios.get("https://products-data.herokuapp.com/api/allProducts")
            .then(data => {
                dispatch({ type: 'LOADED', payload: data.data})
            })
            .catch(err => {
                dispatch({ type: 'ERROR', payload: err})
            })
    
}

export const recieveProducts = () => ({
    type: 'RECIEVE_PRODUCTS',
})