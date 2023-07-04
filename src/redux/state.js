const ADD_POST = 'ADD-POST';
const ON_CHANGE_POST = 'ON-CHANGE-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE';

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
        }
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
        if (action.type === ADD_POST) {
            let newPost = {id: 4, message: this._state.profilePage.newPostText};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {id: 4, message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === ON_CHANGE_POST) {
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber(this._state);
        } else if (action.type === ON_CHANGE_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const onChangePostActionCreator = (text) => ({type: ON_CHANGE_POST, newPost:text});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const onChangeMessageActionCreator = (text) => ({type: ON_CHANGE_MESSAGE, newMessage: text});

export default store;
