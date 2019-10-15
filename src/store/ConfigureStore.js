import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import allData from './reducers/allData'
import search from './reducers/search'
import cart from './reducers/cart'

export const history = createBrowserHistory()

const middleware = applyMiddleware(thunk)

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    allData: allData,
    search: search,
    cart: cart
})
export default () => {
    const store = createStore (
        createRootReducer(history)
        , middleware
    );
    return store
}
