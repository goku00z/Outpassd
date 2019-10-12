import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import logReducer from "./logReducer";
import wardenReducer from "./wardenReducer";
import disapproveReducer from "./disapproveReducer";
import wardenlog from "./allLogReducer";

export default combineReducers ({
    user: userReducer,
    log: logReducer,
    warden: wardenReducer,
    disapprove: disapproveReducer,
    wardenlog: wardenlog
});