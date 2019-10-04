const searchReducerDefaultState = {
    text:'',
    searchResault:[]
}


export default (state = searchReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT': {
            return state = {...state, text:action.text}
        }
        default:
            return state;
    }
}