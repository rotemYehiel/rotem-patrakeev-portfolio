import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import AppReducer from './reducers/AppReducer';
// import DataReducer from './reducers/DataReducer';

const store = createStore(combineReducers({
    app: AppReducer,
    // data: DataReducer,
}), applyMiddleware(thunk));


export default store