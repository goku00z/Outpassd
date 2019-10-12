import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import logReducer from "./logReducer";

export default combineReducers ({
    user: userReducer,
    log: logReducer
});