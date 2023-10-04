import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'First post'},
                {id: 2, message: 'Second post'},
                {id: 3, message: 'Third post'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            users: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Anton'},
                {id: 3, name: 'Dima'}
            ],
            messages: [
                {id: 1, message: 'Hi! How are you?'},
                {id: 2, message: 'I am ok! And you?'},
                {id: 3, message: 'Very well'}
            ],
            newMessageText: ''
        },
        aside: {}
    },
    _callSubscriber() {
        console.log('State changed!');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.aside = asideReducer(this._state.aside, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;
