import axios from 'axios'

export const setSearchText = (text = '') => ({
    type: 'SET_SEARCH_TEXT',
    text
})


export const getSearchResult = (dispatch, getState) => {
        const state = getState() 
        axios.get(
        `https://products-data.herokuapp.com/api/searchProduct&searchKeyword=${state.search.text}`
      )
      .then(data => {
        dispatch({
            type: 'SET_SEARCH_RESULTS',
            searchResults: data.data
        });
      })
      .catch(err => {
        dispatch({ type: 'ERROR', searchResults: err})
      })
    
}