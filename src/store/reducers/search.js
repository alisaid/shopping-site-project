const searchReducerDefaultState = {
    text:'',
    searchResults:[]
}


export default (state = searchReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT': {
            return state = {...state, text:action.text}
        }
        case 'SET_SEARCH_RESULTS': {
            return state = {...state, searchResults: action.searchResults}
        }
        case 'ERROR': {
            return state = {...state, error: action.searchResults}
        }
        default:
            return state;
    }
}