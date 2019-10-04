import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allData from './reducers/allData'

const middleware = applyMiddleware(thunk)
export default () => {
    const store = createStore (
        combineReducers({
            allData: allData
        }), middleware
    );
    return store
}
