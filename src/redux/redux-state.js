import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    aside: asideReducer
});

let store = legacy_createStore(reducers);

export default store;
