import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    aside: asideReducer,
    usersPage: usersReducer
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;
