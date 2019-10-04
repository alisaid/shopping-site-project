import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allData from './reducers/allData'
import search from './reducers/search'

const middleware = applyMiddleware(thunk)
export default () => {
    const store = createStore (
        combineReducers({
            allData: allData,
            search: search
        }), middleware
    );
    return store
}
