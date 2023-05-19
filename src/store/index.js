import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import AppReducer from './reducers/AppReducer';
import DataReducer from './reducers/DataReducer';
import MailReducer from './reducers/MailReducer';

const store = createStore(combineReducers({
    app: AppReducer,
    data: DataReducer,
    mail: MailReducer
}), applyMiddleware(thunk));


export default store