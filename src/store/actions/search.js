import axios from 'axios'


export const setSearchText = (text = '') => ({
    type: 'SET_SEARCH_TEXT',
    text
})


export const getSearchResult = dispatch => {
    console.log(dispatch)
}