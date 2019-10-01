import { createStore, combineReducers} from 'redux'
import isFetching from '../reducers/isFetching'


export default () => {
    const store = createStore (
        combineReducers({
            isFetching: isFetching
        })
    );
    return store
}
