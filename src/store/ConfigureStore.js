import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allData from './reducers/allData'
import search from './reducers/search'
import cart from './reducers/cart'

const middleware = applyMiddleware(thunk)

const createRootReducer = () => combineReducers({
    allData: allData,
    search: search,
    cart: cart
})
export default () => {
    const store = createStore (
        createRootReducer()
        , middleware
    );
    return store
}
